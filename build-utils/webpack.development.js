const webpackMerge = require('webpack-merge');
const base = require('./base/base.development');
const server = require('./server/dev.server');

// LOADERS 
const postcssLoader = require('./loaders/postcss.loader.development');
 
module.exports = () => {
  
  return webpackMerge([
      
    base.devBase(),
    
    server.devServer({
      // Customize host/port here if needed
      // host: process.env.HOST,
      // port: process.env.PORT,
      // port: 8080
    }),
    
    {
      module: {
        rules: [ 
          postcssLoader() 
        ]
      }
    
    }
    
      
  ]) // webpackMerge

};