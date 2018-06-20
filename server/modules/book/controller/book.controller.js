/*
*  新增图书
*  1、获取豆瓣信息；
*  2、入库；
*/
let {get} = require("../../../app/script/http");
let {mysql} = require('../../../qcloud')
let log = require('../../../app/script/log')


async function addBookPost(ctx, next) {
  let {isbn, openId} = ctx.request.body;
  if (!isbn || !openId) {
    ctx.state = {
      code: -1,
      message: 'isbn或者openId为空！',
    }
    return;
  }
  let bookInfo = await get(`https://api.douban.com/v2/book/isbn/${isbn}`);
  let rate = bookInfo.rating.average;
  let {title, image, alt, publisher, summary, price} = bookInfo;
  let tags = bookInfo.tags.map(v => {return `${v.title} ${v.count}`;}).join(',');
  let authors = bookInfo.author.join(',');
  let result = {
    isbn,
    openId,
    rate, title, image, alt, publisher, summary, price, tags, authors,
    createdAt: new Date(),
    createdBy: openId,
    updatedAt: new Date(),
    updatedBy: openId
  }
  await mysql('books').insert(result);
  ctx.state = {
    code: 0,
    message: '新增成功!',
    data: result
  }
}

module.exports = {
  addBookPost,
}
