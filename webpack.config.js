var webpack = require('webpack');
var env = process.env.WEBPACK_ENV;

var config = {
  entry: "./src/components/Explorer.js",
  output: {
    path:     __dirname + '/app/assets/javascripts/',
    filename: 'betterplace_explorer.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};

var WebpackDevServer = require('webpack-dev-server');
var host = '0.0.0.0';
var port = '9999';

if (env === 'dev') {
  new WebpackDevServer(webpack(config), {
    contentBase: './app/assets',
    hot: true,
    debug: true,
    historyApiFallback: true,
  }).listen(port, host, function (err, result) {
    if (err) {
      console.log(err);
    }
  });
  console.log('-------------------------');
  console.log('Local web server runs at http://' + host + ':' + port);
  console.log('-------------------------');
}

module.exports = config;
