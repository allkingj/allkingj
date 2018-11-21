/**
 * 注册接口 服务层
 * Created by wangjian on 2018/10/29
 */

// 本地依赖
const BaseService = require('./BaseService');
const RegisterModel = require('../models/RegisterModel');

class RegisterService extends BaseService {

  /*
 	* 构造函数
 	* */
  constructor(){
    super();
    this.registerModel = new RegisterModel();
  }

  // 处理注册数据
  dealRegister(params, cb){

    //生成必要参数
    const self = this;
    const {mobile, password, res, username} = params;
    const create_time = self.moment().format('YYYY-MM-DD HH:mm:ss');  //当前的时间戳
    const ticket = self.manageCrypto.getHash({secret: create_time}); //注册的票据
    const userid = self.manageCrypto.getHash({secret: `user_id${create_time}`}); //用户id
    const crypto_password = self.manageCrypto.getHash({secret: password}); //加密用户密码
    const expire = 60 * 60 * 24;

    // 设置Mysql查询参数
    const selectParams = [
      mobile
    ];

    // 设置redis参数
    const redisParams = {
      userid,
      ticket,
      expire
    };

    // 设置mysql参数(要按照顺序放值)
    const mysqlParams = [
      userid,
      username,
      mobile,
      crypto_password,
      create_time
    ];

    //保存用户数据
    (async()=>{
      try{
        //查询用户是否已经被注册
        const resdata = await self.registerModel.selectMysql(selectParams);

        if(resdata && resdata.length===0){
          //保存用户数据到mysql
          await self.registerModel.saveRedis(redisParams);

          //保存用户数据到redis
          await self.registerModel.saveMysql(mysqlParams);

          //设置cookie
          res.cookie('access_token', ticket, {domain: self.envConfig.domain, httpOnly: true});

          //返回值
          return cb(null);
        }
        cb('手机号码已被注册');
      }catch(err){
        return cb(err);
      }
    })();
  }

}

module.exports = RegisterService;