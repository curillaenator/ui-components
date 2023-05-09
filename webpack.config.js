const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',

  devtool: 'source-map',

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },

  entry: './src/index.tsx',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.[hash].js',
    publicPath: '/',
    clean: true,
  },

  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: {
      '@src': path.resolve(__dirname, './src'),
    },
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: path.resolve(__dirname, './src/assets'), to: '' }],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    new CleanWebpackPlugin(),
    // new Dotenv(),
  ],

  module: {
    rules: [
      {
        test: /\.(scss|css|sass)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
      },
      {
        test: /\.m?(js|jsx|ts|tsx)$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
      },
    ],
  },
};
