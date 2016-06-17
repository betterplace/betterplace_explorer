var webpack = require('webpack');
var env = process.env.WEBPACK_ENV;

var config = [
  {
    entry: "./src/components/Explorer.jsx",
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
  },
  {
    entry: "./app/assets/stylesheets/betterplace_explorer.sass",
    output: {
      path:     __dirname + '/preview/',
      filename: 'betterplace_explorer_styles.js',
    },
    module: {
      loaders: [
        {
          test: /\.sass$/,
          loaders: ['style', 'css', 'sass']
        }
      ]
    }
  }
]

var WebpackDevServer = require('webpack-dev-server');
var host = '0.0.0.0';
var port = '9999';

if (env === 'dev') {
  new WebpackDevServer(webpack(config), {
    contentBase: './preview',
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
