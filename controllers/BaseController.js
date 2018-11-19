/**
 * 控制器基类
 * Created by wangjian on 2018/10/29
 */

// 第三方依赖
const logger = require('log4js').getLogger('controller');
const Schema = require('async-validator');
// 本地依赖
const DealAppRes = require('../middlewares/DealAppRes');
const FieldSchema = require('../middlewares/FieldSchema');

class BaseController {

  /*
	 * 构造
	 * */
  constructor() {
    this.schema = Schema;
    this.fieldSchema = FieldSchema;
    this.logger = logger;
    this.dealAppRes = new DealAppRes();
  }

}

module.exports = BaseController;
