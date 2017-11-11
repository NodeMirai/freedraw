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
