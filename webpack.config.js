const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const parts = require('./libs/parts')

const merge = require('webpack-merge')
const validate = require('webpack-validator')
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
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })]
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
        }
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
            'react-dom': 'react-lite'
          }
        }
      },
      parts.extractBundle({
        name: 'vendor',
        entries: ['react', 'react-dom', 'react-router']
      }),
      parts.loadImages(PATHS.images),
      parts.extractCSS(PATHS.app),
      parts.uglifyJs(),
      parts.browserSync()
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

module.exports = validate(config);
