const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')


module.exports = {
  entry:  __dirname + "/src/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  devtool: '#source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: true,
      parallel: true
    }),
    new ExtractTextPlugin({
      filename: 'style.css'
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: { safe: true, map: { inline: false } }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {   // CHANGED
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      { test: /\.less$/, loader: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.scss$/, loader: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(jpg|png|gif|bmp|jpeg)$/, loader: 'url-loader?limit=2097152&name=img/[name].[hash:7].[ext]' },
      { test: /\.(ttf|eot|svg|woff|woff2)$/, loader: 'url-loader' },
      { test: /\.vue$/, loader: 'vue-loader' }
    ]
  },
  resolve:{
    alias:{
      'vue$':'vue/dist/vue.js'
    }
  }
}

