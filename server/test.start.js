let {initializeMapper} = require('./app/script/mapper.js');


async function start() {
  await initializeMapper();
  let ret = await mapper.user.insert()
  console.log('ret-->>', ret);
}

let result = start();
