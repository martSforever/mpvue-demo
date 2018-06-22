const {mysql} = require('../../../qcloud');

async function insert(ctx) {
  let userId = ctx.params.userId;
  let comment = Object.assign({}, ctx.params, {
    createdAt: new Date(),
    createdBy: userId,
    updatedAt: new Date(),
    updatedBy: userId,
  });
  await mysql('comments').insert(comment)
  ctx.state = {code: 0, message: '新增成功!', data: comment}
  ctx.state.message && log.success(ctx.state.message);
}

module.exports = {
  insert
}
