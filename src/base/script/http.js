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
      success({data: state}) {
        if (state.code === config.successCode) {
          defaultSuccessHandler(rs, state.data);
        } else {
          defaultErrorHandler(rj, state);
        }
      },
      fail({data: state}) {
        defaultErrorHandler(rj, state);
      },
    });
  })
}

function defaultErrorHandler(rj, state) {
  showModal(state.message, {
    title: '请求失败'
  })
  console.error('reject-->>', state.message);
  rj(state);
}

function defaultSuccessHandler(rs, state) {
  rs(state);
}
