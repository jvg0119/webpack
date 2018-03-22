
// entry -> output

// run this through node in the terminal
// node webpack.config.js
// /Users/joseph/practice/FE/react-course-projects/r-06-08-saving-loading-count
// this is the absolute path to this project folder
const path = require('path');
//console.log(__dirname);
// console.log(path.join(__dirname, 'public')) // run    node webpack.config.js
// /Users/joseph/practice/FE/react-course-projects/r-06-08-saving-loading-count/public
// use this path;   see below in path: ...
// save this then run webpack
// yarn run build

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'  // could be any namec
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
  	contentBase: path.join(__dirname, 'public')
  }
};
