export default class Config{
    constructor(){

    }
}
let baseUrl = ""
console.log(process.env.NODE_ENV)
switch (process.env.NODE_ENV) {
  case 'development':
  baseUrl = "api"  //这里是本地的请求url
      break
  case 'test':  
  baseUrl = "http://test"  //这里是测试环境中的url
      break
  case 'production':
  baseUrl = "https://production"   //生产环境url
      break
}
Config.baseUrl = baseUrl;
Config.overtime = 20000000; // 请求超时时间

