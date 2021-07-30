const path = require('path');
const fs = require('fs');
const { uglify } = require('rollup-plugin-uglify');

const resolve = function(filePath) {
  return path.join(__dirname, '.', filePath)
}

module.exports = {
  input: resolve('src/index.js'),
  output: {
    file: resolve('dist/index.js'),
    format: 'umd'
  },
  plugins: [
    uglify(),
  ],
}