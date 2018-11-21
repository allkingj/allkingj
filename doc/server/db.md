# 数据库文档

### mysql 用户表

```
    CREATE TABLE `user_register` (
      `id` int(10) NOT NULL AUTO_INCREMENT,
      `userid` char(100) NOT NULL COMMENT '用户ID',
      `username` varchar(100) NOT NULL COMMENT '用户名称',
      `mobile` char(100) NOT NULL COMMENT '手机号码',
      `password` char(100) NOT NULL COMMENT '密码',
      `create_time` datetime NOT NULL COMMENT '创建时间',
      `change_time` datetime DEFAULT NULL COMMENT '最后修改时间',
      PRIMARY KEY (`id`)
    ) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;
```