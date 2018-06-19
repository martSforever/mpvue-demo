let walk = require('walk')
let path = require('path')
let log = require('./log')

let root = path.resolve(__dirname, '../../')              //要扫描的目录

let walkOptions = {
  followLinks: false,
  filters: ["node_modules"]                              // directories with these keys will be skipped
}

function getFileList(path, end) {
  let walker = walk.walk(path, walkOptions);

  walker.on('file', function (roots, stat, next) {
    let index = stat.name.indexOf(".mapper.js");
    if (index > 0) {
      let name = stat.name.substr(0, index);
      let filePath = roots + '/' + stat.name;
      !global.mapper && (global.mapper = {});
      !global.mapperInfo && (global.mapperInfo = {});
      if (global.mapper[name] != null) {
        let errMsg = `mapper已经存在，存在文件：【${global.mapperInfo[name].filePath}】，冲突文件：【${filePath}】`;
        throw new Error(errMsg);
      }
      global.mapper[name] = require(filePath);
      global.mapperInfo[name] = {
        filePath: filePath,
        fileName: stat.name,
        mapperName: name,
      }
    }
    next();
  });
  walker.on('end', function () {
    end && end();
  });
}

module.exports.initializeMapper = async function () {
  return new Promise((rs, rj) => {
    log.success(`mapper scaning root:${root}`);
    getFileList(path.join(root), () => {
      rs();
    });
  })
}
