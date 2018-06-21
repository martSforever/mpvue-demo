export function copy(target) {
  return JSON.parse(JSON.stringify(target));
}

export function encodeGetParam(data) {
  let url = '';
  for (let key in data) {
    let value = data[key] !== undefined ? data[key] : '';
    url += `&${key}=${encodeURIComponent(value)}`;
  }
  return url ? url.substr(1, url.length) : ''
}

export function chunk(array, num) {
  let ret = [];
  let subRet = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    subRet.push(item);
    if ((i + 1) % num === 0 && i !== 0) {
      ret.push(subRet);
      subRet = [];
    }
  }
  return ret;
}
