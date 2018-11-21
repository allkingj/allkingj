/**
 * web服务入口 控制器
 * Created by wangjian on 2018/11/13
 */

// 本地依赖
const BaseController = require('./BaseController');
const CheckService = require('../services/CheckService');

class CheckController extends BaseController{

  /*
	 * 构造函数
	 * */
  constructor(req) {

    super(req);

    //实例化
    this.checkService = new CheckService();

  }

  //校验是否登录
  checkLogin(req, res, next){

    //获取必要参数
    const self = this;
    const {access_token} = req.cookies;
    const type = req.query.type || req.body.type;

    /*
		* 参数设置
		* @手机号码
		* @密码
		* */
    const params = {
      res,
      access_token
    };

    if(!type){
      self.logger.error('CheckController', '参数不合法');
      return self.dealAppRes.resJson({res: res, status: null, code: -1, msg: '参数不合法', data: null});
    }

    if(type==='content'){
      if(!access_token){
        self.logger.error('CheckController', '用户未登录');
        return self.dealAppRes.resJson({res: res, status: null, code: -3000, msg: '用户未登录', data: null});
      }

      self.checkService.checkMessage(params, (err, data)=>{
        if(err){
          self.logger.error('CheckController', err);
          return self.dealAppRes.resJson({res: res, status: null, code: -3000, msg: err, data: null});
        }
        next();
      });
    }
    if(type==='entry'){
      next();
    }
  }

}

module.exports = CheckController;