/**
 * 服务层基类
 * Created by wangjian on 2018/10/29
 */

//第三方依赖
const logger = require('log4js').getLogger('service');
const moment = require('moment');

// 本地依赖
const ManageCrypto = require('../middlewares/ManageCrypto');
const envConfig = require('../middlewares/checkEnv');

class BaseService {

  /*
	* 构造函数
	* */
  constructor(){
    this.logger = logger;
    this.moment = moment;
    this.envConfig = envConfig;
    this.manageCrypto = new ManageCrypto();
  }

}

module.exports = BaseService;