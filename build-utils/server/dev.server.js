const path = require('path');

exports.devServer = ({ host, port } = {}) => ({
  
  watch: true, // LIVE RELOAD
  
  devServer: {
    
    // Can be omitted unless you are using 'docker', Defaults to `localhost`
    host,  
    
    port, // Defaults to 8080
    
    // This is where webpack-dev-server serves your bundle
    // which is created in memory.
    // To use the in-memory bundle,
    // your <script> 'src' should point to the bundle
    // prefixed with the 'publicPath', e.g.:
    //   <script src='http://localhost:9001/assets/bundle.js'>
    //   </script>
    
    // publicPath: '/assets/',
    
    // contentBase: path.resolve(__dirname, '../../dist'),
    contentBase: [ 
      path.resolve(__dirname, '../../dist'), 
      path.resolve(__dirname, '../../src/templates') 
    ],

    // 'Live-reloading' happens when you make changes to code
    // dependency pointed to by 'entry' parameter explained earlier.
    // To make live-reloading happen even when changes are made
    // to the static html pages in 'contentBase', add 
    // 'watchContentBase'
    watchContentBase: true,

    stats: {
      colors: true,
      children: false
    },
    
    watchOptions: {
      poll: 1000
    },
    
    open: true,
    
    overlay: true,

    compress: true,
    
    port: 8080    
  
  }
  
});