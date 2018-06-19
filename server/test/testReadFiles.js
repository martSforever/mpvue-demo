let walk = require('walk')
let path = require('path')

let root = path.join(__dirname)
let files = [], dirs = [];

console.log(root);
getFileList(path.join(root))

function getFileList(path) {
  let walker = walk.walk(path, {followLinks: false});

  walker.on('file', function (roots, stat, next) {
    files.push(roots + '/' + stat.name);
    next();
  });

  walker.on('directory', function (roots, stat, next) {
    dirs.push(roots + '/' + stat.name);
    next();
  });
  walker.on('end', function () {
    console.log("files " + files);
    console.log("dirs " + dirs);
  });
}
