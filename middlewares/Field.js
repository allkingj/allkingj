/**
 * 字段
 * Created by wangjian on 2018/11/12
 */

//手机号码
const mobile = /^1[34578]\d{9}$/;

//校验规则 正则表达式  只允许输入 数字跟字母
const password = /^[A-Za-z0-9]{6,16}$/;

const username = /^[a-zA-Z]\w{5,17}$/;

const Field = {
  mobile,
  password,
  username
};

module.exports = Field;