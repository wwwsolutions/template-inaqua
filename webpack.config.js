// WEBPACK COMPOSED CONFIG

const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

// LOADERS 
const babelLoader = require('./build-utils/loaders/babel.loader');
const immagesLoader = require('./build-utils/loaders/images.loader');
const fontsLoader = require('./build-utils/loaders/fonts.loader');
const videoLoader = require('./build-utils/loaders/video.loader');

// PLUGINS
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// PARTIAL CONFIGS LOADER
const loadSpecificModeConfig = env => require(`./build-utils/webpack.${env}`)(env);

// WEBPACK CONFIG
module.exports = ({ mode } = { mode: 'production' }) => {
  
  return webpackMerge(

    // COMMON CONFIG
    {
      mode, 
      entry: ['./src/index.js'],
      module: {
        rules: [
          babelLoader(), 
          immagesLoader(),
          fontsLoader(),
          videoLoader(),
        
        ]
      },
      plugins: [ 

        new webpack.HotModuleReplacementPlugin(),
        
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css'
        }), 
        
        new CopyWebpackPlugin([
          { from: './src/assets/images', to: 'assets/images' }
        ]),
        
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: path.resolve(__dirname, './src/templates/index.html'),
          favicon: path.resolve(__dirname, './src/templates/images/favicon.png')
        }), 
        
        new webpack.ProgressPlugin(),

      ],

    },

    // SPECIFIC MODE CONFIGURATIOS
    loadSpecificModeConfig(mode),
  
  );
};
