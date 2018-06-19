function addBook(ctx, next) {
  console.log('addBook...');
  ctx.state.data = {
    msg: 'addBook haha',
  }
}

function showBooksGet(ctx) {
  console.log('showBooksGet');
  ctx.state.data = {
    msg: 'showBooksGet',
  }
}

function allBookPost(ctx) {
  console.log('allBookPost');
  ctx.state.data = {
    msg: 'allBookPost',
  }
}

module.exports = {
  addBook,
  showBooksGet,
  allBookPost
}
