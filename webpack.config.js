const path = require('path');

module.exports = {
  entry: {
     app: "./app/assets/js/app.js"
  },
  output: {
    path: path.resolve(__dirname, "./app/temp/js"),
    filename: "[name].js"
  },
  module: {
  	rules: [
  	  {
	      use: {
          loader: "babel-loader",
  	      options: {
            presets: [
              '@babel/preset-env'
            ]
          }
        },
	      test: /\.js$/,
	      exclude: /node_modules/
      }
  	]
  }
}
