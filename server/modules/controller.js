const _ = require('lodash')
const fs = require('fs')
const path = require('path')

let tree = {};
/**
 * 映射 d 文件夹下的文件为模块
 */
const mapDir = d => {

  /*--------------------------------------扫描modules目录下的*.controller.js，用于将路由信息注入到router中---------------------------------------------------*/

  // 获得当前文件夹下的所有的文件夹和文件
  const [dirs, files] = _(fs.readdirSync(d)).partition(p => fs.statSync(path.join(d, p)).isDirectory())

  // 映射文件夹
  dirs.forEach(dir => {
    mapDir(path.join(d, dir))
  })

  // 映射文件
  files.forEach(file => {
    if (file.indexOf('.controller.js') > -1) {
      // console.log('-------------------------valid-->>', file, file.substr(0, file.indexOf('.')))
      let name = file.substr(0, file.indexOf('.'));
      let filePath = path.join(d, file);
      if (!!tree[name]) {
        let errMsg = `同名controller已经存在，先发现controller【${tree[name].filePath}】，后发现controller【${filePath}】，冲突名称【${name}】`;
        throw new Error(errMsg);
      }

      let controller = require(filePath);
      controller.filePath = filePath;
      controller.name = name;
      tree[name] = controller;
    }
  })
  return tree
}

/*--------------------------------------将modules目录下的controllers注入到router中---------------------------------------------------*/
function injectRouter(router) {
  let controllers = mapDir(path.join(__dirname));
  for (let name in controllers) {
    let controller = controllers[name];
    let basePath = `/${name}`;
    for (let k in controller) {
      if (k !== 'name' && k !== 'filePath') {
        let isGet = k.indexOf('Get') > -1;
        let isPost = k.indexOf('Post') > -1;
        /*如果是已Get结尾的，就注册一个get请求，如果是已post结尾的，就注册一个post请求，如果两者都没有，就注册get和post请求*/
        if (!isGet && !isPost) {
          router.get(`${basePath}/${k}`, controller[k]);
          router.post(`${basePath}/${k}`, controller[k]);
        } else if (isGet) {
          router.get(`${basePath}/${k}`, controller[k]);
        } else {
          router.post(`${basePath}/${k}`, controller[k]);
        }
      }
    }
  }
}

// 默认导出当前文件夹下的映射
module.exports = injectRouter;
