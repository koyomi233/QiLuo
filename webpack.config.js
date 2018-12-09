module.exports = {
  entry:  __dirname + "/src/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      { test: /\.less$/, loader: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
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

