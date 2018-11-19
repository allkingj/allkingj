/**
 * 注册接口 数据层
 * Created by wangjian on 2018/10/29
 */

// 本地依赖
const BaseModel = require('./BaseModel');

class RegisterModel extends BaseModel {

  constructor(){
    super();
  }

  /*
	* 查询该手机号是否已经注册
	* @params
	* */
  selectMysql(params){
    const self = this;
    return new Promise((resolve, reject)=>{
      (async()=> {
        try{
          let sql = 'select mobile from test.user_register where mobile = ?';
          const Row = await self.dealMysql.execute(sql, params);
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
    const {ticket, userid, expire} = params;
    return new Promise((resolve, reject)=>{
      self.redis.set(ticket, userid, expire, async (err, result)=>{
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
          let sql = 'insert into test.user_register(userid,username,mobile,password,create_time)values(?,?,?,?,?)';
          const Row = await self.dealMysql.execute(sql, params);
          resolve(Row);
        }catch(e){
          reject(e);
        }
      })();
    });
  }
}

module.exports = RegisterModel;