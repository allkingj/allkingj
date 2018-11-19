/**
 * 处理接口输出
 * Created by wangjian on 2018/10/19
 */

class DealAppRes {

  /*
	* 构造函数
	* */
  constructor(){}

  /*
	* res.json
	* @res
	* @status 服务状态码
	* @code 接口状态码
	* @err 错误数据
	* success 成功数据
	* @data 接口返回数据
	* */
  resJson(param){
    const {res, status, code, msg, data} = param;
    res.set({
      'Content-Type': 'application/json'
    });

    //服务器端错误
    if(status || status === 500){
      return res.status(500).json({code, msg, data: null});
    }

    //用户请求信息错误
    if(code === 0){
      res.json({code, msg, data});
    }else{
      res.json({code, msg, data: null});
    }

  }

  // res.jsonp 待开发

  // res.redirect 待开发

  // res.send 待开发

  // res.sendFile 待开发


}

module.exports = DealAppRes;