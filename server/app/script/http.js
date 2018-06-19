const http = require('http');
const https = require('https');

function encodeGetParam(data) {
  let url = '';
  for (let key in data) {
    let value = data[key] !== undefined ? data[key] : '';
    url += `&${key}=${encodeURIComponent(value)}`;
  }
  return url ? url.substr(1, url.length) : ''
}

let h = {
  http, https
}

function get(url, param) {
  return new Promise((rs, rj) => {
    url = `${url}?${encodeGetParam(param)}`;
    console.log(url);
    https.get(url, (res) => {
      let urlData = '';
      res.on('data', data => {
        urlData += data;
      });
      res.on('end', () => {
        const bookInfo = JSON.parse(urlData);
        if (bookInfo.title) {
          rs(bookInfo);
        } else {
          rj(bookInfo);
        }
      },)
    })
  })
}

module.exports = {
  get
}


