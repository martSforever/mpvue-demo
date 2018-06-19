//配置项

const host = 'http://localhost:5757';
const prodHost = 'https://vaidnoho.qcloud.la';

const config = {
  host,
  successCode: 0,
  loginUrl: `${host}/weapp/login`,
  userUrl: `${host}/weapp/user`,
}

export default config;

export let colors = {
  red: '#EA5149',
  green: '#39B548'
}
