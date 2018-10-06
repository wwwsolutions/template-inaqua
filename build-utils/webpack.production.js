const webpackMerge = require('webpack-merge');
const base = require('./base/base.production');

// LOADERS 
const postcssLoader = require('./loaders/postcss.loader.production');

// PLUGINS
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = () => {
  
  return webpackMerge([

    base.prodBase(),

    {
      module: {
        rules: [ 
          postcssLoader() 
        ]
      }
    
    },

    {
      optimization: {
        minimize: true,
        usedExports: true, // DEFAULT true
        sideEffects: true,
        noEmitOnErrors: false, // DEFAULT
        namedModules: true,
        namedChunks: true,
        moduleIds: false, // DEFAULT
        nodeEnv: 'production', // DEFAULT
        mangleWasmImports: true,
        removeAvailableModules: true, // DEFAULT true
        removeEmptyChunks: true, // DEFAULT true
        mergeDuplicateChunks: true, // DEFAULT true
        flagIncludedChunks: true, // DEFAULT true
        occurrenceOrder: true, // DEFAULT true
        providedExports: true, // DEFAULT true
        concatenateModules: false, // DEFAULT true
        minimizer: [
          new UglifyJsPlugin({
            test: /\.js(\?.*)?$/i,
            include: undefined,
            exclude: undefined,
            cache: true,
            sourceMap: false,
            minify: undefined,
            extractComments: false,
            uglifyOptions: {
              warnings: true,
              parse: {},
              compress: {},
              mangle: true, // Note `mangle.properties` is `false` by default.
              toplevel: false,
              nameCache: null,
              ie8: false,
              keep_fnames: false,
              output: { // DEFAULT null        
                    beautify: false 
              }
            },
          }) // UglifyJsPlugin
        ],
      }
    }

  ]) // webpackMerge

};
