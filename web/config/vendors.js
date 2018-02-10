'use strict';

let
  context = `${__dirname}/../..`,
  devtool = 'cheap-inline-module-source-map',
  mainDir = `${context}/src/main`,
  exclude = /(node_modules|bower_components)/,
  webpack = require('webpack'),
  definePlugin = webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.BUILD_PROD ? 'production' : 'development'),
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
    __PROD__: JSON.stringify(JSON.parse(process.env.BUILD_PROD || 'false'))
  });

module.exports = {
  context,
  devtool,
  entry: {
    vendors: [
      'react',
      'react-dom',
      'bootstrap/dist/css/bootstrap.min.css',
    ],
    app: `${mainDir}/www/main`,
    admin: `${mainDir}/www/admin/main`
  },
  output: {
    path: `${mainDir}/resources/public/`,
    filename: '[name].js'
    // used to generate URLs to e.g. images
    //publicPath: 'http://mycdn.com/'
  },
  resolve: {
    extensions: ['', '.json', '.js', '.jsx']
  },
  module: {
    loaders: [
      {test: /\.(js|jsx)$/, exclude, loader: 'babel-loader'},
      // use '!' to chain loaders
      {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10240&mimetype=image/svg+xml'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10240&mimetype=application/octet-stream'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5120'},
      // inline base64 URLs for < 5k images, direct URLs for the rest
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=5120'}
    ]
  },
  // This will remove all modules in the vendors chunk from the app and admin chunks. (see condig.entry)
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: [
        'app',
        'admin',
        'vendors',
        'manifest',
      ],
      // filename: 'vendors.js'
      // // with this, you will link only one bundle on a page (app.js or admin.js), within vendors.js inside
      // // children: true,
    })
  ]
};
