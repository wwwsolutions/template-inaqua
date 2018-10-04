const path = require('path');
const buildPath = path.resolve(__dirname, '../../dist');

exports.prodBase = () => (
  {
    output: {
      filename: "[name][hash].js",
      path: buildPath
    }
  }

);