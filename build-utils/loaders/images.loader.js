module.exports = () => ({

  test: /\.(png|jpg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  use: [{
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: 'images/[name].[md5:hash:hex:8].[ext]'
    }
  }]

});
