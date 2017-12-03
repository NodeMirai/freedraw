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

## 2017-11-11
### 添加bootstrap
与file-loader，file-loader目的是用来家在bootstrap.css中一些字体文件内容
### 问题
1. 两个inline-block垂直方向不对齐,调整vertical-align为super后近似垂直对齐的原因？
为使多个元素在一行内垂直对齐尽量少用inline-block，因为inline-block行内元素会对其他使用vertical-align的元素造成影响(因对齐方式)
更对采用定位方式来解决
2. input type search时不能更改height
3. 为内敛元素或者块级元素添加line-height的作用是什么
4. 尽量减少使用float，因为float即会影响周边元素，又需要clearfix清除浮动，而一般清除浮动都需要伪元素，导致后续无法继续使用after或before
5. word-break与word-wrap具体学习
- word-wrap表示是否允许单词过长时换行
- word-break表示以何种方式换行，因此如果想使用word-break则需要先定义word-wrap
6. vertical-align各属性学习
7. 文本过长时超出部分自定义显示
使用overflow: hidden将过长部分隐藏，然后使用text-overflow: (string)来定义过长部分显示内容

## 2017-11-13
### webpack打包文件7m，加载过慢解决方案
1. nginx服务器开启gzip压缩
在server外侧添加一下选项(__注意gzip_types中js的压缩方式，一半一般使用application/javascript__)
    gzip on;
    gzip_min_length  1k;
    gzip_buffers     4 16k;
    gzip_http_version 1.1;
    gzip_comp_level 4;
    gzip_types       text/plain text/css text/javascript application/javascript application/x-javascript application/xml  image/jpeg image/gif image/png;
    gzip_proxied       any;
    gzip_static on;
    gzip_vary on;

2. 优化webpack打包
- 在webpack.config.js目录下执行webpack --display-modules --sort-modules-by size可看到所有引入模块并按照从小到大排序

moment.js 467kb：自己封装时间相关工具
react-dom 700kb：改为生产版本，使用cdn加速
jquery：自己封装ajax工具
simple-loader|module|hotkeys: 看看是个啥东西再说

- 删除source-map项(完全就是这货的锅)


## 2017-11-17
### webpack-dev-server
- 需要配合html-webpack-plugin一起使用才可访问页面
- 通过配置devServer可以设定服务根目录位置
### webpack优化插件使用
- CommonsChunkPlugin 将公共模块单独抽出，需要在webpack中配置多个entry

## 2017-12-03
### 使用fetch封装请求
fetch封装认证请求完成
### 问题记录
1. fetch中使用request body时需要主意，payload与form data对应两种不同的content-type，
   request payload使用application/json, form data使用application/x-www-form-urlencoded
