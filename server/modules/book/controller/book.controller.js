/*
*  新增图书
*  1、获取豆瓣信息；
*  2、入库；
*/
const {get} = require("../../../app/script/http");
const {mysql} = require('../../../qcloud')
const config = require('../../../app/script/config')

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

async function list(ctx) {
  let pageSize = config.pageSize;
  let page = ctx.params.page;

  const list = await mysql('books')
    .select('books.*', 'cSessionInfo.user_info')
    .join('cSessionInfo', 'books.openId', 'cSessionInfo.open_id')
    .limit(pageSize)
    .offset(pageSize * (page - 0))
    .orderBy('createdAt', 'desc');
  list.forEach((item) => {
    item.userinfo = JSON.parse(item.user_info);
    delete item.user_info;
  })
  ctx.state = {code: 0, data: list}
}

async function detail(ctx) {
  console.log("detail", ctx.params);
  let books = await mysql('books').where('id', ctx.params.id).limit(1).select('*');
  ctx.state = {code: 0, data: books[0]}
}

/*
*  浏览量加一
*/
async function addCount(ctx) {
  if (!ctx.params.id) {
    ctx.state = {code: -1, message: 'id不能为空!'};
    return;
  }
  await mysql('books').where('id', ctx.params.id).increment('count', 1);
  await detail(ctx);
}

async function topBook(ctx) {
  if (!ctx.params || !ctx.params.num) {
    ctx.params = {
      num: 6
    }
  }
  let books = await mysql('books').orderBy('count', 'desc').limit(ctx.params.num).select('*');
  ctx.state = {code: 0, data: books}
}

module.exports = {
  addBookPost,
  list,
  detail,
  addCount,
  topBook
}
