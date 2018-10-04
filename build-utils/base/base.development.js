const path = require('path');
const buildPath = path.resolve(__dirname, '../../dist');

exports.devBase = () => (
  {
    devtool: 'source-map',
    output: {
      filename: "[name].js",
      path: buildPath
    }
  }

);