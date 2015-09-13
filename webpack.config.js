var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var config = {
  context: path.join(__dirname, '/lib'),

  entry: {
    rangen: './rangen.js'
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'rangen.js',
    library: 'rangen',
    libraryTarget: 'umd'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('rangen', 'rangen.js')
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ]
  }
};

config.plugins.push(function () {
  this.plugin('done', function () {
    var data = 'var request;"undefined"!=typeof window?request={get:function(e){return new Promise(function(t,n){var r=new XMLHttpRequest;r.onreadystatechange=function(){r.readyState===XMLHttpRequest.DONE&&(200===r.status&&t({data:JSON.parse(r.responseText)}),n(r.status+" error"))},r.open("GET",e,!0),r.send()})}}:"undefined"!=typeof process&&(request=require("axios"));';
    fs.appendFile('./dist/rangen.js', data, function (err) {
      console.log(err);
      console.log('done');
    });
  });
});

module.exports = config;
