const webpackMerge = require('webpack-merge');
const base = require('./base/base.production');

// LOADERS 
const postcssLoader = require('./loaders/postcss.loader.production');


module.exports = () => {
  
  return webpackMerge([

    base.prodBase(),

    {
      module: {
        rules: [ 
          postcssLoader() 
        ]
      }
    
    }

  ]) // webpackMerge

};
