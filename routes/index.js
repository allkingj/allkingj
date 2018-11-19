/**
 * 路由入口
 * Created by wangjian on 2018/10/15
 */

//第三方依赖
const express = require('express');

//本地依赖
const checkRouter = require('./checkRouter');
const loginRouter = require('./loginRouter');
const logoutRouter = require('./logoutRouter');
const registerRouter = require('./registerRouter');
const homeRouter = require('./homeRouter');
const userRouter = require('./userRouter');


const routerEntry = app => {

  //web服务入口
  app.use('/', checkRouter);

  //登录接口
  app.use('/api/login', loginRouter);

  //登出接口
  app.use('/api/logout', logoutRouter);

  //注册接口
  app.use('/api/register', registerRouter);

  //首页接口
  app.use('/api/home', homeRouter);

  //用户信息接口
  app.use('/api/user', userRouter);
};


module.exports = routerEntry;


