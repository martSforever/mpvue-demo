

module.exports = {
  async query(param) {
    return new Promise((rs, rj) => {
      setTimeout(() => {
        param.time = new Date();
        rs(param);
      }, 1000);
    })
  },
}
