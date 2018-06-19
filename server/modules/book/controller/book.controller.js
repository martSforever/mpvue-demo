/*
*  新增图书
*  1、获取豆瓣信息；
*  2、入库；
*/
let {get} = require("../../../app/script/http");


async function addBookPost(ctx, next) {
  let {isbn, openId} = ctx.request.body;
  if (!!isbn && !!openId) {

    let bookInfo = await get(`https://api.douban.com/v2/book/isbn/${isbn}`);
    let rate = bookInfo.rating.average;
    let {title, image, alt, publisher, summary, price} = bookInfo;
    let tags = bookInfo.tags.map(v => {
      return `${v.title} ${v.count}`;
    }).join(',');
    let authors = bookInfo.author.join(',');
    let ret = {
      rate, title, image, alt, publisher, summary, price, tags, authors
    }
    console.log(ret);

    ctx.state.data = bookInfo;
  } else {
    ctx.state.code = 1;
  }

}

module.exports = {
  addBookPost,
}
