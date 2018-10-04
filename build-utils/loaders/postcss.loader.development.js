// PLUGINS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// POSTCSS PLUGINS
const postcssImport = require('postcss-import');
const postcssMixins = require('postcss-mixins');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssNested = require('postcss-nested');
const postcssHexrgba = require('postcss-hexrgba');
const postcssNormalize = require('postcss-normalize');
const stylelint = require('stylelint');
const postcssReporter = require('postcss-reporter');

module.exports = () => ({

  test: /\.css$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: 'inline',
        plugins: () => [

          postcssImport(),
          stylelint(),
          postcssReporter(),


          postcssMixins(),
          postcssSimpleVars(),
          postcssNested(),
          postcssHexrgba(),
          postcssNormalize({
            forceImport: true,
            allowDuplicates: false,
            // browsers: 'last 2 versions' // from .browserslistrc
          })

        ]
      }
    }
  ]

});
