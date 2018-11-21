/**
 * 数据层基类
 * Created by wangjian on 2018/10/29
 */

// 本地依赖
const Redis = require('../lib/Redis');
const DealMysql = require('../middlewares/DealMysql');

class BaseModel {

  /*
	* 构造函数
	* */
  constructor(){
    this.redis = new Redis();
    this.dealMysql = new DealMysql();
  }

}

module.exports = BaseModel;