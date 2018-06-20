/*
*  新增图书
*  1、获取豆瓣信息；
*  2、入库；
*/
let {get} = require("../../../app/script/http");
let {mysql} = require('../../../qcloud')

async function addBookPost(ctx, next) {
  let {isbn, openId} = ctx.request.body;

  /*校验图书isbn编码以及用户openId是否存在*/
  if (!isbn || !openId) {
    ctx.state = {code: -1, message: 'isbn或者openId为空！',}
    return;
  }

  /*校验图书是否被添加过*/
  let findRes = await mysql('books').select().where('isbn', isbn);
  if (findRes.length && findRes.length > 0) {
    ctx.state = {code: -1, message: `【${findRes[0].title}】图书已经被添加过了!`};
    return;
  }

  /*查询图书基本信息*/
  let bookInfo = await get(`https://api.douban.com/v2/book/isbn/${isbn}`);
  let rate = bookInfo.rating.average;
  let {title, image, alt, publisher, summary, price} = bookInfo;
  let tags = bookInfo.tags.map(v => {
    return `${v.title} ${v.count}`;
  }).join(',');
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

  /*图书信息持久化*/
  await mysql('books').insert(result);
  ctx.state = {code: 0, message: '新增成功!', data: result}
  ctx.state.message && log.success(ctx.state.message);
}

module.exports = {
  addBookPost,
}
