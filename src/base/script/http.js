import config from "../config/config";
import {showModal} from "./msg";

export function get(url, param) {
  return request(url, param, 'GET');
}

export function post(url, param) {
  return request(url, param, 'POST');
}


function request(url, param, method) {
  return new Promise((rs, rj) => {
    wx.request({
      url: config.host + '/' + url,
      data: param,
      method: method,
      success(res) {
        let data = res.data;
        if (data.code === config.successCode) {
          defaultSuccessHandler(rs, data);
        } else {
          defaultErrorHandler(rj, data);
        }
      },
      fail(res) {
        defaultErrorHandler(rj, res.data);
      },
    });
  })
}

function defaultErrorHandler(rj, data) {
  showModal(JSON.stringify(data), {
    title: '请求失败'
  })
  console.error('reject-->>', data);
  rj(data);
}

function defaultSuccessHandler(rs, data) {
  rs(data);
}
