const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: ['./src/main.js', './src/main.scss'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [path.join(__dirname, 'src'), 'node_modules']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },

      {
        test: /\.s?css$/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sourceMapContents: false
            }
          }
        ]
      },

      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader']
      },

      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: 'bundle.css' }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin('dist')
  ],

  devServer: {
    historyApiFallback: true,
    proxy: { '/api': 'http://localhost:3000' }
  }
};
