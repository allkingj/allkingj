/**
 * 环境检测
 * Created by wangjian on 2018/10/18
 */

//本地文件
const config = require('../config/env/base.config');
const _ = require('lodash');

//第三方依赖
const logger = require('log4js').getLogger('checkEnv');

//判断配置环境
let envType = _.trim(config.baseConfig.envType);

//校验是否配置是否出错
if(typeof envType !== 'string' || envType !==''){
  logger.warn(`配置的环境变量出错默认改回${envType}`);
  envType = 'dev';
}

let envConfig = '';

switch (envType) {
case 'dev':
  envConfig = config.devConfig;
  break;
case 'qas':
  envConfig = config.qasConfig;
  break;
case 'pro':
  envConfig = config.proConfig;
  break;
default:
  envConfig = config.devConfig;
}

//如果是测试环境或者开发环境在部署后请查看日志中是否部署了正确的环境
logger.info(`envtype: ${envType}`);

module.exports = envConfig;
