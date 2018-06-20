const log = require('../app/script/log');

/**
 * 响应处理模块
 */
module.exports = async function (ctx, next) {
  if (ctx.request.method === 'GET') {
    ctx.params = ctx.request.query;
  } else if (ctx.request.method === 'POST') {
    ctx.params = ctx.request.body;
  }
  await next()
}
