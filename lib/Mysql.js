/**
 * mysql 配置文件
 * Created by wangjian on 2018/10/15
 */

//第三方依赖
const mysql = require('mysql');
const logger = require('log4js').getLogger('mysql');

//本地依赖
const envConfig = require('../middlewares/checkEnv');

class MysqlService {
  constructor(){
    this.mysqlService = mysql.createPool({
      host: envConfig.mysql.host,
      port: envConfig.mysql.port,
      user: envConfig.mysql.user,
      password: envConfig.mysql.password
      // debuge: true,                    //调试模式
      // database: config.mysql.database
      // connectionLimit : 50,
      // multipleStatements : true        //是否允许执行多条sql语句
    });

    //测试mysql链接
    this.mysqlService.getConnection(function (err, connection) {
      if (err) {
        logger.error(err);
        return;
      }
      logger.info('connect mysql ok.');
      connection.release();
    });
  }

  getMysqlService(){
    return this.mysqlService;
  }
}

module.exports = MysqlService;
