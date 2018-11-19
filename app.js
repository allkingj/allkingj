/**
 * app入口
 * Created by wangjian on 2018/10/15
 */

//第三方依赖
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const log4js = require('log4js');
const favicon = require('serve-favicon');
const helmet = require('helmet');

const session = require('express-session');
const RedisStore = require('connect-redis')(session);

const logger = log4js.getLogger('app');

//本地文件
const config = require('./config/env/base.config');
const envConfig = require('./middlewares/checkEnv');
const routerEntry = require('./routes/index');
const DealAppRes = require('./middlewares/DealAppRes');
const dealAppRes = new DealAppRes();

const app = express();

// view engine setup
app.set('view engine', 'html');
app.set('trust proxy', 1);

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(log4js.connectLogger(log4js.getLogger('http'), { level: 'auto' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));

// session redis存储
const store = new RedisStore({
  host: envConfig.redis.host,
  port: envConfig.redis.port,
  pass: envConfig.redis.password
});

//设置session
app.use(session({
  store: store,
  name: 'session_id',
  secret: 'xiaoluzhu_net',
  resave: true,
  rolling: true,
  saveUninitialized: false,
  cookie: {domain: envConfig.domain, maxAge: 1000 * 60 * 60 * 2}
}));

//路由设置
routerEntry(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// development error handler
// will print stacktrace
if (config.baseConfig.envType === 'dev') {
  app.use(function(err, req, res, next) {
    logger.error('AppError', err);
    dealAppRes.resJson({res: res, status: err.status || 500, code: -1, msg: err, data: null});
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  logger.error('AppError', err);
  dealAppRes.resJson({res: res, status: err.status || 500, code: -1, msg: err, data: null});
});

module.exports = app;
