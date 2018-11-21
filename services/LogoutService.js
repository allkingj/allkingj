/**
 * 登出接口 服务层
 * Created by wangjian on 2018/11/16
 */

// 本地依赖
const BaseService = require('./BaseService');
const LogoutModel = require('../models/LogoutModel');

class LogoutService extends BaseService {

  /*
	 * 构造函数
	 * */
  constructor(){
    super();
    this.logoutModel = new LogoutModel();
  }

  // 处理登录接口
  dealLogout(params, cb) {

    //生成必要参数
    const self = this;
    const { res } = params;
    // 设置删除参数

    //清除用户数据
    (async()=>{

      //捕捉异常
      try{
        /*
				* 伤处redis数据
				* @params
				* */
        await self.logoutModel.delRedis(params);
        res.clearCookie('access_token', { path: '/' });
      }catch(err){
        return cb(err);
      }
      //返回值
      cb(null);
    })();
  }
}

module.exports = LogoutService;