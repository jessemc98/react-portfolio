const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const fs = require("fs")
const path = require("path")
const url = require("url")

exports.devServer = function(options) {
  return {
    devServer: {
      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,
      // Unlike the cli flag, this doesn't set
      // HotModuleReplacementPlugin!
      hot: true,
      inline: true,
      // Display only errors to reduce the amount of output.
      stats: 'errors-only',
      // Parse host and port from env to allow customization.
      //
      // If you use Vagrant or Cloud9, set
      // host: options.host || '0.0.0.0';
      //
      // 0.0.0.0 is available to all network devices
      // unlike default `localhost`.
      host: options.host || '0.0.0.0', // Defaults to `localhost`
      port: options.port // Defaults to 8080
    },
    plugins: [
      // Enable multi-pass compilation for enhanced performance
      // in larger projects. Good default.
      new webpack.HotModuleReplacementPlugin({
        multiStep: true
      })
    ]
  };
}

exports.clean = function(path) {
  return {
    plugins: [
      new CleanWebpackPlugin([path], {
        // Without `root` CleanWebpackPlugin won't point to our
        // project and will fail to work.
        root: process.cwd()
      })
    ]
  };
}

exports.extractBundle = function(options) {
  const entry = {};
  entry[options.name] = options.entries;

  return {
    // Define an entry point needed for splitting.
    entry: entry,
    plugins: [
      // Extract bundle and manifest files. Manifest is
      // needed for reliable caching.
      new webpack.optimize.CommonsChunkPlugin({
        names: [options.name , 'manifest'],
        filename: '[name].[chunkhash].js'
      })
    ]
  };
}

exports.extractCSS = function(paths) {
  return {
    module: {
      rules: [
        // Extract CSS during build
        {
          test: /\.(scss|css|sass)$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: "style-loader",
            loader: [
              {
                loader: "css-loader"
              },
              {
                loader: "postcss-loader"
                // options: {
                //   plugins: function () {
                //     return [autoprefixer]
                //   }
                // }
              },
              {
                loader: "sass-loader"
              }
            ]
          }),
          include: paths
        }
      ]
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
         options: {
            postcss: [autoprefixer]
        }
      }),
      // Output extracted CSS to a file
      new ExtractTextPlugin({
        filename: '[name].[hash].min.css'
      })
    ]
  };
}
exports.lint = function(paths) {
  return {
    module: {
      rules: [
        {
          // the regex tests for js | jsx
          test: /\.jsx?$/,
          enforce: "pre",
          loader: "eslint-loader",
          // define an include so we check just the files we need
          include: paths
        }
      ]
    }
  }
}
// css-loader will resolve @import and url statements in our CSS files.
// style-loader deals with require statements in our JavaScript.
// A similar approach works with CSS preprocessors, like Sass and Less, and their loaders.
exports.setupCSS = function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.(scss|css|sass)$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ],
          include: paths
        }
      ]
    }
  }
}

exports.setupResponsiveImages = function(enabled) {
  return {module: {
    rules: [
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'responsive-loader',
            options: {
              sizes: [128, 320, 640, 720, 1024, 1280],
              pass: !enabled
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/assets/[name].[hash].[ext]'
            }
          }
        ]
      }
    ]
  }}
}

exports.setupImages = function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.(jpg|png)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: '25000'
              }
            }
          ],
          include: paths
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[hash].[ext]'
              }
            }
          ],
          include: paths
        }
      ]
    }
  }
}

exports.loadImages = function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.(jpg|png|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '/assets/[name].[hash].[ext]'
              }
            }
          ],
          include: paths
        }
      ]
    }
  }
}

exports.uglifyJs = function() {
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin(
        {
          minimize: true,
          debug: false,
          compress: {
            warnings: false,
          },
          output: {
            comments: false,
          }
        }
      )
    ]
  }
}

exports.setFreeVariable = function(key, value) {
  const env = {};
  env[key] = JSON.stringify(value);

  return {
    plugins: [
      new webpack.DefinePlugin(env)
    ]
  };
}
