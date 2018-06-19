/*
*  新增图书
*  1、获取豆瓣信息；
*  2、入库；
*/
let {get} = require("../../../app/script/http");


async function addBookPost(ctx, next) {
  let {isbn, openId} = ctx.request.body;
  if (!!isbn && !!openId) {
    ctx.state.data = await get(`https://api.douban.com/v2/book/isbn/${isbn}`);
  } else {
    ctx.state.code = 1;
  }

}

module.exports = {
  addBookPost,
}
