let colors = require('colors');

const types = {
  success: 'green',
  error: 'red',
  warn: 'yellow',
  info: 'cyan',
  debug: 'magenta',
}

let log = {};

for (let k in types) {
  log[k] = function () {
    console.log(colors[types[k]](arguments));
  }
}

module.exports = log;
