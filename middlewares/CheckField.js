/**
 * 验证类
 * Created by 王剑 on 2018/11/12
 */

// 本地依赖
const Field = require('./Field');

class CheckField {
  /*
	* 构造函数
	* */
  constructor(){}

  //校验用户名
  checkUsername(...arg){
    const sUsername = arg[0];
    if(!(Field.username.test(sUsername))){
      return false;
    }
    return true;
  }

  //校验手机号码
  checkMobile(...arg){
    const sMobile = arg[0];
    if(!(Field.mobile.test(sMobile))){
      return false;
    }
    return true;
  }

  //校验密码
  checkPassword(...arg){
    const sPassword= arg[0];
    if(!(Field.password.test(sPassword))){
      return false;
    }
    return true;
  }

}

module.exports = CheckField;