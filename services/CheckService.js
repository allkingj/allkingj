/**
 * web服务入口 服务层
 * Created by wangjian on 2018/11/13
 */

// 本地依赖
const BaseService = require('./BaseService');
const CheckModel = require('../models/CheckModel');

class CheckService extends BaseService {

  /*
	 * 构造函数
	 * */
  constructor(){
    super();
    this.checkModel = new CheckModel();
  }

  checkMessage(params, cb){

    //生成必要参数
    const self = this;
    const {access_token, res} = params;

    //校验用户数据
    (async()=>{
      
      //捕捉异常
      try{

        // 设置查询参数
        const checkParams = {access_token};

        /*
				* 根据access_token查询询用户数据
				* @params
				* */
        const userid = await self.checkModel.getRedis(checkParams);

        if(!userid){
          return cb('该用户已失效');
        }

        // 设置查询参数
        const selectParams = [userid];

        /*
				* 根据用户手机号码查询用户数据
				* @params
				* */
        const userInfo = await self.checkModel.getUserInfo(selectParams);

        if(!userInfo){
          return cb('该用户已失效');
        }

        //返回值
        cb(null, userInfo);

      }catch(err){
        cb(err);
      }
    })();
  }

}

module.exports = CheckService;