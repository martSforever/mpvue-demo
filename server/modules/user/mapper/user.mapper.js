let db = require('../../../app/script/db');

module.exports = {
  name: 'userMapper',
  async insert() {
    let p1 = await db.query({});
    console.log(p1);
    let p2 = await db.query(p1);
    console.log(p2)
    let p3 = await db.query(p1);
    console.log(p3)
    return p3;
  },
}
