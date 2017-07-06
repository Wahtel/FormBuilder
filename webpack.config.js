const NODE_ENV = process.env.NODE_ENV || 'dev';
const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
const minimizeConfig = {
  compress: {
    warnings: false
  },
  comments: false
};
let plugins = [
  HTMLWebpackPluginConfig
];

if (NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin(minimizeConfig));
}

module.exports = {
  entry: {
    main: ['./app/js/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'bin'),
    filename: (NODE_ENV === 'production' ? 'app.bundle.min.js' : 'app.bundle.js'),
    publicPath: '/'
  },
  watch: (NODE_ENV === 'dev'),
  watchOptions: {
    aggregateTimeout: 90
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader']
      },
      {
        test: /\.css$/, loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=[path][name].[ext]'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?name=[path][name].[ext]&limit=10000&mimetype=application/font-woff"
      },
    ]
  },
  plugins
};
