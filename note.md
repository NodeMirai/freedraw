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

### 使用redux重构流程
1. react-redux中的provider与connect
- provider负责将总的store传入到应用根组件中，通过connect与provider是每个组件都有获得store中state的能力

### 问题记录
1. fetch中使用request body时需要主意，payload与form data对应两种不同的content-type，
   request payload使用application/json, form data使用application/x-www-form-urlencoded
   两种类型在request body中分别为__"{a:a, b:b}"与"a=a&b=b"__

2. 为了使用react-redux中connect装饰器，babel新增preset: ["stage-0"], "plugins": ["transform-decorators-legacy"]
    安装stage-0与transform-decorators-legacy插件

## 2017-12-06
### 登陆成功后的用户头像与下拉框
### 首页展示区与用户中心编辑（抄网易漫画）
### 用户中心（填充个人信息，上传个人资源）

## 2017-12-07
### sass部分重构原则
1. 变量名称命名要有规则(例如BEM)，实体--标示
2. 使用%placeholder代替Mixin(placeholder解析后会变成样式类的共有部分，而Mixin会直接copy导致重复)
3. 嵌套不要超过3层，超过时进行分离(部分样式也可以考虑采用盒模型方式使用%placeholder封装出去)

## 2017-12-08
### token失效后清空token
Storage其他用法：
1. addEventListener(storage, (e) => console.log(e))：storage对象内的值的创建/修改/删除都会出发该事件，创建重复键值不会出发，clear仅触发一次
2. storage的作用域为当前页面协议，即a.com下的storage在b.com下是访问不到的
### 整理article中action与reducer，删除不影响状态变更的部分
1. render中触发action时需要主意是否存在无限循环触发的情况(action会出发render更新，而render内部又调用action)


### 编写头像菜单
1. layout弹出层占满全屏，并添加mouseenter时出发action，改变某字段值控制菜单显隐
2. 头像与菜单z-index值大于弹出层，确保mouseenter时菜单保持显示状态
3. header组件与menu组件需要共享isMenuShow状态值，因此需要redux管理

### 问题记录
1. react中编写action时可能会出现action与action之间连续调用的情况，导致频繁调用render，是否是否有办法可以一次性render
方案：为删除添加心得action，一次性获取并更新，即__当有一个行为触发了多个action时，需要为它单独写一个action来避免多次render__
删除文章：删除后需要即使更新当前文章id
2. react中首次加载时由于render在componentDidMount之前，导致this.refs无法获取，此时无法设置值
3. __z-index的层数由元素最根元素决定__
4. 仅有头像触发菜单，后期需要把退出登陆部分与头像分开在两个元素中，不可有公共父元素，并为菜单隐显添加transition显示
5. transition对display无效，因此一般使用width，height，opacity代替，
6. 如果目标元素中有链接之类那么推荐用visibility而不是opacity,因为opacity为0时链接仍可以被点击

## 2017-12-09
### page中添加个人中心页
1. 新增高阶组件highLevel,container组件改为纯容器，子组件变为参数，由传入参数决定
### 路由跳转404时，自动重定向至首页

### 问题记录
1. react第一次进入某路由时refs值存在，第二次进入时refs内值小时(需要扒一下refs源码)

## 2017-12-10
### redux connect参数mapDispatchToProps使用方法
1. 直接import对应的所有action creator，组件出发action creator后会进入reducer匹配环节来修改state
2. 不引入所有action creator，通过(dispatch) => {...}的方式可以直接定义需要dispatch的action
__注：这里需要看connect第二个参数的使用情况，猜测：如果直接返回state则直接render，如果为action creator则需要通过reducer返回state后render__

## 2017-12-11
### 用户信息修改前端界面
1. 使用网格布局方式实现

### 问题记录
1. grid布局在sass中无法使用重复语法 ()[]

## 20171213
### Bug修复
1. 点击注册按钮时校验当前账号是否存在，如果为存在状态则点击注册无效
2. 登陆接口如果返回500应进行message弹出提示
3. 登陆时错误验证：用户名不存在 | 用户名存在密码错误

### 用户信息修改实现流程
1. 用户信息表中sex默认为1，点击modal后调用用户信息查询接口

### react组件状态分类
1. 各组件错__误类信息与成功信息__交给组件自身管理（state）

## 2017-12-14
### h5图片预览与express文件上传
#### 1. h5图片预览原理
input[type=file]中可以从DOM.files中获取选择的Blob对象(二进制数据对象)，filereader通过readAsDataURL读取blob对象，
filereader对象通过监听onloadend事件判断blob对象读取状态
- filereader.readyState为fileReader.DONE时表示读取完成，同时filereader.reasult会返回一个blob的以data:开头的base64
- 将base64放入img标签的src属性中即可实现
#### 2. formdata文件上传注意事项
1. __content-type头不要自定义__，此时浏览器会自动添加正确头部,有时候会自动添加content-type:text-plain（不造为啥）
2. formdata对象可以通过input[type="file"]生成，__也可通过blob或file对象生成__

3. 更新用户信息接口需要将上传与用户信息更新放在一起，否则头像资源路径不方便与其他信息一起存储
