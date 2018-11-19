/**
 * 登出接口 数据层
 * Created by wangjian on 2018/11/16
 */

// 本地依赖
const BaseModel = require('./BaseModel');

class LogoutModel extends BaseModel {

  constructor(){
    super();
  }

  /*
	* 将数据保存到redis
	* @params
	* */
  delRedis(params){
    const self = this;
    const { access_token } = params;
    return new Promise((resolve, reject)=>{
      self.redis.del(access_token, async (err, result)=>{
        if(err){
          reject(err);
        }
        resolve(result);
      });
    });
  }
}

module.exports = LogoutModel;
