/**
 * 首页接口 数据层
 * Created by wangjian on 2018/11/13
 */

// 本地依赖
const BaseModel = require('./BaseModel');

class LoginModel extends BaseModel {

  constructor(){
    super();
  }

  /*
 * 根据用户手机号码查询用户密码
 * @params
 * */
  getPassword(params){
    const self = this;
    return new Promise((resolve, reject)=>{
      (async()=> {
        try{
          let sql = 'select password,userid from test.user_register where mobile = ?';
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
  saveRedis(params){
    const self = this;
    const {ticket, crypto_password, expire} = params;
    return new Promise((resolve, reject)=>{
      self.redis.set(`user${ticket}`, crypto_password, expire, async (err, result)=>{
        if(err){
          reject(err);
        }
        resolve(result);
      });
    });
  }

  /*
	* 将数据保存到mysql
	* @params
	* */
  saveMysql(params){
    const self = this;
    return new Promise((resolve, reject)=>{
      (async()=> {
        try{
          let sql = 'insert into test.user_register(userid,mobile,password,create_time)values(?,?,?,?)';
          const Row = await self.dealMysql.execute(sql, params);
          resolve(Row);
        }catch(e){
          reject(e);
        }
      })();
    });
  }
}

module.exports = LoginModel;