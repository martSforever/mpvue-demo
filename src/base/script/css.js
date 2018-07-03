export function classes(obj) {
  let classesStr = '';
  for (let className in obj) {
    if (obj.hasOwnProperty(className) && !!obj[className]) classesStr += className;
  }
  return classesStr;
}

export function styles(obj) {
  let stylesStr = '';
  for (let styleName in obj) {
    if (obj.hasOwnProperty(styleName)) stylesStr += `${styleName.replace(/([A-Z])/g, "-$1").toLowerCase()}:${obj[styleName]};`;
  }
  return stylesStr;
}
