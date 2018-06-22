import {get} from "./http";
import {encodeGetParam} from "./util";
import config from "../config/config";

export let location = {
  baidu_ak_token: 'TLiNRvLjufKaCAfvCAXqT5cgD29FMXXU',
  baidu_url: 'http://api.map.baidu.com/geocoder/v2/'
}

export async function getLocation() {
  return new Promise((rs, rj) => {
    wx.getLocation({
      success: async geo => {
        let {latitude, longitude} = geo;
        console.log('latitude,longitude', latitude, longitude)
        let param = {
          location: `${latitude},${longitude}`,
          ak: location.baidu_ak_token,
          output: 'json'
        }
        let url = `${location.baidu_url}?${encodeGetParam(param)}`
        wx.request({
          url: url,
          data: param,
          method: 'GET',
          success(res) {
            rs(res.data.result.formatted_address);
          },
          fail(res) {
            console.error(res);
            rj('无法获取地理位置！');
          },
        });
      },
      fail: e => {
        console.error(e);
        rj('无法获取地理位置！');
      }
    })
  })
}
