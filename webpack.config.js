var normalize   = require('node-normalize-scss').includePaths;
var neat = require("node-neat").with(normalize);

var sassPaths = neat.map(function (sassPath){
  return 'includePaths[]=' + sassPath;
}).join('&');

console.log(sassPaths);


module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass?outputStyle=compressed&"  + sassPaths + '&' + normalize]
      }
    ]
  }
};
