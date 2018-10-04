module.exports = () => ({

  test: /\.(mp4|ogg|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  use: [{
    loader: 'file-loader',
    options: {
      name: 'assets/[name].[md5:hash:hex:8].[ext]'
    }
  }]

});
