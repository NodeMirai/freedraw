## 2017-11-05 目标：文章CRUD样式编写，对接接口

### react封装simditor
1. npm下载插件包
2. react组建中引入对应插件
3. 在组件挂载之前(componentWillMount)用refs获取dom节点，将插件挂载到对应dom节点中

### 调整文章组件布局
1. 两列布局已完成(浮动方式+clearfix实现)


### 问题
1. 二列布局何时使用浮动，何时使用定位，以及其优缺点
2. react-router组织跳转
3. react如何发送ajax请求

## 2017-11-07
## nginx缓存问题导致net::ERR_CONTENT_LENGTH_MISMATCH
Nginx的工作进程对大文件做了缓存，这个缓存在 %nginx%/proxy_temp 目录下，主进程在读取缓存的时候由于权限问题而无法访问，从而导致以上异常
chown -R _www:admin(根据登陆用户决定) proxy_temp
