var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src',
  output: {
    path: 'build',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        include: __dirname + '/src',
      },
      // {  // don't want styles injected in line anymore
      //   test: /\.css/,
      //   loaders: ['style', 'css'],
      //   include: __dirname + '/src'
      // }
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin("styles.css")   // this will generate styles.css with all my styles in it so it doesn't inline
  ]
};
