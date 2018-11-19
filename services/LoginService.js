/**
 * 登录接口 服务层
 * Created by wangjian on 2018/10/30
 */

// 本地依赖
const BaseService = require('./BaseService');
const LoginModel = require('../models/LoginModel');

class LoginService extends BaseService {

  /*
 	* 构造
 	* */
  constructor(){
    super();
    this.loginModel = new LoginModel();
  }

  // 处理登录接口
  dealLogin(params, cb) {

    //生成必要参数
    const self = this;
    const {mobile, password, res} = params;
    const create_time = self.moment().format('YYYY-MM-DD HH:mm:ss');  //当前的时间戳
    const ticket = self.manageCrypto.getHash({secret: create_time}); //注册的票据
    const crypto_password = self.manageCrypto.getHash({secret: password}); //加密用户密码
    const expire = 60 * 60 * 24;

    // 设置查询参数
    const checkParams = [mobile];

    //校验用户数据
    (async()=>{
      let _data = {};
      //捕捉异常
      try{

        /*
				* 根据用户手机号码查询用户数据
				* @params
				* */
        const row = await self.loginModel.getPassword(checkParams);
        if(row.length === 0){
          return cb('用户名不存在');
        }

        // 获取待处理参数
        const _password = row[0].password;
        const _userid = row[0].userid;
        _data = {_userid};

        // 密码校验
        if(_password !== crypto_password){
          return cb('用户名或密码不正确');
        }

        // 设置redis参数
        const redisParams = {
          _userid,
          ticket,
          expire
        };

        //保存到reids
        await self.loginModel.saveRedis(redisParams);

        //设置cookie
        res.cookie('access_token', ticket, {domain: self.envConfig.domain, httpOnly: true});

      }catch(err){
        return cb(err);
      }

      //返回值
      cb(null, _data);
    })();
  }
}

module.exports = LoginService;