/**
 * 票据生成
 * Created by wangjian on 2018/10/19
 */

//第三方依赖
const utility= require('utility');

class ManageCrypto {

  /*
	* 构造函数
	* */
  constructor(){}

  /*
  * crypto模块中的createHmac()方法，通过sha256算法对明文进行哈希化
  * @param 待加密数据
  * */
  getHash (param) {
    const { secret }= param;
    return utility.md5(secret);
  }
}

module.exports = ManageCrypto;

