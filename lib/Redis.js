/**
 * redis 配置文件
 * Created by wangjian on 2018/10/19
 */

//第三方依赖
const redis = require('redis');
const logger = require('log4js').getLogger('redis');

//本地依赖
const envConfig = require('../middlewares/checkEnv');

class RedisClient {

  /*构造函数*/
  constructor(){
    this.client = redis.createClient(
      {port: envConfig.redis.port, host: envConfig.redis.host, db: envConfig.redis.db});
    this.client.auth(envConfig.redis.password);

    //测试redis

    this.client.on('error', function (err) {
      logger.error('Error :', err);
    });

    this.client.on('connect', function(){
      logger.info('Redis连接成功.');
    });
  }

  /**
 * 添加string类型的数据
 * @param key 键
 * @params value 值
 * @params expire (过期时间,单位秒;可为空，为空表示不过期)
 * @param callBack(err,result)
 */
  set(key, value, expire, callback) {
    const _client = this.client;
    this.client.set(key, value, function (err, result) {
      if (err) {
        logger.error(err);
        callback(err, null);
        return;
      }
      if (!isNaN(expire) && expire > 0) {
        _client.expire(key, parseInt(expire));
      }
      callback(null, result);
    });
  }

  /**
	* 查询string类型的数据
	* @param key 键
	* @param callBack(err,result)
	*/
  get(key, callback){
    this.client.get(key, function(err, result){
      if (err) {
        logger.error(err);
        callback(err, null);
        return;
      }
      callback(null, result);
    });
  }

  /**
	 * 删除string类型的数据
	 * @param key 键
	 * @param callBack(err,result)
	 */
  del(key, callback){
    this.client.del(key, function(err, result){
      if (err) {
        logger.error(err);
        callback(err, null);
        return;
      }
      callback(null, result);
    });
  }

}

module.exports = RedisClient;
