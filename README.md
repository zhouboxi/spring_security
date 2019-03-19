# spring_security
Springboot集成springSecurity

### 一丶遇到的问题
##### 把oracle的jar包导入到本地的maven仓库
1.在windows下cmd到maven的bin目录下
2.安装指定文件到本地仓库命令：mvn install:install-file
-DgroupId=<groupId>       : 设置项目代码的包名(一般用组织名)
-DartifactId=<artifactId> : 设置项目名或模块名 
-Dversion=1.0.0           : 版本号
-Dpackaging=jar           : 什么类型的文件(jar包)
-Dfile=<myfile.jar>       : 指定jar文件路径与文件名(同目录只需文件名)
安装命令实例：
mvn install:install-file -DgroupId=com.oracle -DartifactId=ojdbc7 -Dversion=11.2.0.4 -Dpackaging=jar -Dfile=C:/ojdbc7.jar 
### 目录结构
![enter description here](./images/2019-03-19_161054.png)
### pom 文件
![enter description here](./images/2019-03-19_161503.png)
![enter description here](./images/2019-03-19_161513.png)
不要导入thymeleaf 不然默认请求/resources/templates
### 对请求进行前后缀添加和打印sql
![enter description here](./images/2019-03-19_161528.png)
### 静态资源不拦截
![enter description here](./images/2019-03-19_162027.png)
### 扫描包
![enter description here](./images/2019-03-19_162324.png)
### 数据库设计
![enter description here](./images/2019-03-19_162445.png)
### JPA实现
![enter description here](./images/2019-03-19_162556.png)
### 验证分析
![enter description here](./images/2019-03-19_162824.png)
未登录前是不管如何请求都会转到.login请求
#### 源码分析
![enter description here](./images/2019-03-19_163024.png)
#### 验证过程
![enter description here](./images/2019-03-19_163330_1.png)

![enter description here](./images/2019-03-19_163343.png)

![enter description here](./images/2019-03-19_163431.png)

![enter description here](./images/2019-03-19_163506.png)

#### 获取登陆权限
![enter description here](./images/2019-03-19_163857.png)

#### 设置默认的请求封装
![enter description here](./images/2019-03-19_164038.png)

#### 请求设置权限
![enter description here](./images/2019-03-19_164300.png)

#### 效果图
登陆成功页面
![enter description here](./images/2019-03-19_164412.png)
无权限请求页面
![enter description here](./images/2019-03-19_164439.png)
有权限请求页面
![enter description here](./images/2019-03-19_164454.png)