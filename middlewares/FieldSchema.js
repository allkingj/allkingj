/**
 * 字段校验
 * Created by wangjian on 2018/10/30
 */

// 本地依赖
const CheckField = require('./CheckField');
const checkField = new CheckField();

const FieldSchema = {
  login: {
    mobile: [
      {type: 'string', message: '参数不合法'},
      {required: true, message: '请输入手机号码'},
      {
        validator(rule, value, callback, source, options) {
          const errors = [];
          const checkMobile = checkField.checkMobile(value);
          if(checkMobile){
            return callback(errors);
          }
          errors.push('错误的手机号码格式');
          callback(errors);
        }
      }
    ],
    password: [
      {type: 'string', message: '参数不合法'},
      {required: true, message: '请输入密码'},
      {
        validator(rule, value, callback, source, options) {
          const errors = [];
          const checkPassword= checkField.checkPassword(value);
          if(checkPassword){
            return callback(errors);
          }
          errors.push('错误的密码格式');
          callback(errors);
        }
      }
    ]
  },
  register: {
    username: [
      {type: 'string', message: '参数不合法'},
      {required: true, message: '请输入用户名'},
      {
        validator(rule, value, callback, source, options) {
          const errors = [];
          const checkMobile = checkField.checkUsername(value);
          if(checkMobile){
            return callback(errors);
          }
          errors.push('错误的用户名格式');
          callback(errors);
        }
      }
    ],
    mobile: [
      {type: 'string', message: '参数不合法'},
      {required: true, message: '请输入手机号码'},
      {
        validator(rule, value, callback, source, options) {
          const errors = [];
          const checkMobile = checkField.checkMobile(value);
          if(checkMobile){
            return callback(errors);
          }
          errors.push('错误的手机号码格式');
          callback(errors);
        }
      }
    ],
    password: [
      {type: 'string', message: '参数不合法'},
      {required: true, message: '请输入密码'},
      {
        validator(rule, value, callback, source, options) {
          const errors = [];
          const checkPassword= checkField.checkPassword(value);
          if(checkPassword){
            return callback(errors);
          }
          errors.push('错误的密码格式');
          callback(errors);
        }
      }
    ]
  }
};


module.exports = FieldSchema;