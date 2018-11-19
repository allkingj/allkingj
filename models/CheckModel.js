/**
 *
 * Created by wangjian on 2018/11/14
 */

// 本地依赖
const BaseModel = require('./BaseModel');

class CheckModel extends BaseModel {

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
          let sql = 'select mobile from test.user_register where userid = ?';
          const Row = await self.dealMysql.row(sql, params);
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

module.exports = CheckModel;