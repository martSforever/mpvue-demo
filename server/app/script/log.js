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
  log[k] = function (msg) {
    // console.log(msg,'-->>',(msg instanceof String))
    if (!msg instanceof String)
      msg = JSON.stringify(msg);
    console.log(colors[types[k]](msg));
  }
}

module.exports = log;
