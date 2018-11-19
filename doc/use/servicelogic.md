# 业务逻辑介绍

### 第一部分  用户登录/注册/登出

- 校验登录 check 模块

    - 接口类型校验

    - 校验cookie

- 登录 login 模块
        
    - 用户输入信息校验
    
    - 通过cookie 查询用户数据
    
    - 设置cookie
    
- 登出 logout 模块

    - 通过cookie 查询用户数据
    
    - 删除用户登录的数据
    
    - 清空cookie
    
- 注册 register 模块
    
    - 用户输入信息校验
        
    - 生成 access_token
    
    - 生成 userid
    
    - 存储用户数据 
    
    - 设置cookie

