/**
 * 数据库查询
 * Created by wangjian on 2018/10/20
 */

// 本地依赖
const MysqlService = require('../lib/Mysql');
const pool = new MysqlService().getMysqlService();

class DealMysql {

  /*
	* 构造函数
	* */
  constructor(){}

  //将结果已对象数组返回
  row(sql, ...params){
    return new Promise(function(resolve, reject){
      pool.getConnection(function(err, connection){
        if(err){
          reject(err);
          return;
        }
        connection.query(sql, params[0], function(error, res){
          connection.release();
          if(error){
            reject(error);
            return;
          }
          resolve(res);
        });
      });
    });
  }

  //返回一个对象
  first(sql, ...params){
    return new Promise(function(resolve, reject){
      pool.getConnection(function(err, connection){
        if(err){
          reject(err);
          return;
        }
        connection.query(sql, params, function(error, res){
          connection.release();
          if(error){
            reject(error);
            return;
          }
          resolve(res[0] || null);
        });
      });
    });
  }

  //返回单个查询结果
  single(sql, ...params){
    return new Promise(function(resolve, reject){
      pool.getConnection(function(err, connection){
        if(err){
          reject(err);
          return;
        }
        connection.query( sql, params, function(error, res){
          connection.release();
          if(error){
            reject( error );
            return;
          }
          for( let i in res[0] )
          {
            resolve( res[0][i] || null );
            return;
          }
          resolve(null);
        });
      });
    });
  }

  //执行代码，返回执行结果
  execute(sql, ...params){
    return new Promise(function(resolve, reject){
      pool.getConnection(function(err, connection){
        if(err){
          reject(err);
          return;
        }
        connection.query(sql, params[0], function(error, res){
          connection.release();
          if(error){
            reject(error);
            return;
          }
          resolve( res );
        });
      });
    });
  }
}

//模块导出
module.exports = DealMysql;