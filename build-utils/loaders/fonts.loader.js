module.exports = () => ({

  test: /\.(woff|woff2|otf|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  use: [{
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: 'fonts/[name].[md5:hash:hex:8].[ext]'
    }
  }]

});
