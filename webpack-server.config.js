var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'server/server.js'),
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'server.js'
  },
	module: {
		loaders: [{
			test: /\.jsx?$/,
      exclude: /node_modules/,
			loader: 'babel'
		}]
	}
};
