const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OfflinePlugin = require("offline-plugin")

const parts = require('./libs/parts')

const merge = require('webpack-merge')
const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'bin'),
  temp: path.join(__dirname, 'tmp'),
  css: path.join(__dirname, 'src', 'style'),
  images: path.join(__dirname, 'src', 'assets')
}

const common = {
  entry: {
    app: PATHS.app
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // ensure manifest icons are properly bundled
      {
        test: /manifest.json$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'manifest.json'
            }
          },
          {
            loader: 'web-app-manifest-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new OfflinePlugin({
      ServiceWorker: {
        navigateFallbackURL: 'index.html'
      },
      AppCache: {
        FALLBACK: { '/': '/index.html' }
      }
    })
  ]
}

let config;
// Detect how npm is run and branch based on that
switch(process.env.npm_lifecycle_event) {
  case 'build':
    //minifys js for production//
    config = merge(
      common,
      {
        output: {
          path: PATHS.build,
          filename: '[name].[chunkhash].js'
        },
        plugins: [
          new webpack.LoaderOptionsPlugin({
            minimize: true
          })
        ]
      },
      {
        devtool: 'source-map'
      },
      parts.lint(PATHS.app),
      parts.clean(PATHS.build),
      parts.setFreeVariable(
        'process.env.NODE_ENV',
        'production'
      ),
      {
        resolve: {
          alias: {
            'react': 'react-lite',
            'react-dom': 'react-lite',
            'react-router': 'react-router/es6'
          }
        }
      },
      parts.extractBundle({
        name: 'vendor',
        entries: ['react', 'react-dom', 'focus-trap-react']
      }),
      parts.loadImages(PATHS.images),
      parts.extractCSS(PATHS.app),
      parts.uglifyJs()
    );
    break;
  case 'serve:build':
    config = merge(
      common,
      {
        output: {
          path: PATHS.temp,
          filename: '[name].js'
        }
      },
      parts.browserSync()
    )
    break;

  default:
    config = merge(
      common,
      {
        output: {
          path: PATHS.temp,
          filename: '[name].js'
        }
      },
      {
        devtool: 'eval-source-map'
      },
      parts.setupImages(PATHS.images),
      parts.setupCSS(PATHS.app),
      parts.lint(PATHS.app),
      parts.devServer({
        host: process.env.HOST,
        port: process.env.PORT
      })
    );
}

module.exports = config;
