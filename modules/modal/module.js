const { resolve } = require('path');

function modalModule(moduleOptions) {
  this.addPlugin({
    src: resolve(__dirname, 'modal.client.js'),
    fileName: 'modal.client.js',
    mode: 'client',
    moduleOptions,
  });
}

module.exports = modalModule;
module.exports.meta = require('./package.json');
