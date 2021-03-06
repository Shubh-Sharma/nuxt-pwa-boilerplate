const { resolve } = require('path');

function toastModule(moduleOptions) {
  this.addPlugin({
    src: resolve(__dirname, 'toast.client.js'),
    fileName: 'toast.client.js',
    mode: 'client',
    moduleOptions,
  });
}

module.exports = toastModule;
module.exports.meta = require('./package.json');
