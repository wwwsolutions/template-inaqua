// PLUGINS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// POSTCSS PLUGINS
const postcssImport = require('postcss-import');
const postcssMixins = require('postcss-mixins');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssNested = require('postcss-nested');
const postcssHexrgba = require('postcss-hexrgba');
const postcssNormalize = require('postcss-normalize');
const postcssReporter = require('postcss-reporter');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const stylelint = require('stylelint');

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
          autoprefixer(),
          postcssReporter(),
          postcssMixins(),
          postcssSimpleVars(),
          postcssNested(),
          postcssHexrgba(),
          postcssNormalize({
            forceImport: true,
            allowDuplicates: false,
          //browsers: 'last 2 versions' // from .browserslistrc
          }),
          cssnano({
            preset: ['default', {
                discardComments: {
                    removeAll: true,
                },
            }]
          }),

        ]
      }
    }
  ]

});
