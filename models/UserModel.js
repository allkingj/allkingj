/**
 * 用户接口 数据层
 * Created by wangjian on 2018/11/15
 */

// 本地依赖
const BaseModel = require('./BaseModel');

class UserModel extends BaseModel {

  constructor(){
    super();
  }

  /*
 * 根据用户手机号码查询用户密码
 * @params
 * */
  getUserInfo(params){
    const self = this;
    return new Promise((resolve, reject)=>{
      (async()=> {
        try{
          let sql = 'select userid,username,mobile,create_time,change_time from test.user_register where userid = ?';
          const Row = await self.dealMysql.first(sql, params);
          resolve(Row);
        }catch(e){
          reject(e);
        }
      })();
    });
  }

  /*
	* 将数据保存到redis
	* @params
	* */
  getRedis(params){
    const self = this;
    const { access_token } = params;
    console.log(params);
    return new Promise((resolve, reject)=>{
      self.redis.get( access_token, async (err, result)=>{
        if(err){
          reject(err);
        }
        resolve(result);
      });
    });
  }
}

module.exports = UserModel;