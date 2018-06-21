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
