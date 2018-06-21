const log = require('../app/script/log');

/**
 * 响应处理模块
 */
module.exports = async function (ctx, next) {
  console.log(ctx)
  if (ctx.request.method === 'GET') {
    ctx.params = ctx.request.query;
    // console.log('ctx.request.query',ctx.request.query)
  } else if (ctx.request.method === 'POST') {
    // console.log('ctx.request.body',ctx.request.body)
    ctx.params = ctx.request.body;
  }
  await next()
};
