# web-workflow

基于[fis3](http://fis.baidu.com/fis3/docs/beginning/intro.html)、[vue](http://cn.vuejs.org/guide/installation.html)
和[amazeUI](http://amazeui.org/getting-started)搭建的前端开发环境。

下面默认你已经安装了fis3,参考 [fis3安装](http://fis.baidu.com/fis3/docs/beginning/install.html)

### start

1. 克隆项目到本地，进入项目根目录执行：

``` bash
npm install
```

2. 开启[fis3前端调试服务器](http://fis.baidu.com/fis3/docs/beginning/debug.html)：

``` bash
fis3 server start
```
    
3. [项目部署预览](http://fis.baidu.com/fis3/docs/beginning/debug.html)：  

``` bash
fis3 release  //开发模式
    
fis3 release prod  //生产模式
```

### 目录规范

``` dir
web-workflow     
    node-modules        
    src     
        components      //自定义vue组件目录
        directives      //自定义vue指令目录
        filters         //自定义vue过滤器目录
        modules         //可使用require加载的模块插件目录
        pages           //页面目录
    static              //静态资源目录
        css
        fonts
        images          //用于存放非组件相关的图片
        js              //无法使用require加载的第三方插件
        plugins         //关联样式表或图片的第三方插件
    mock                //用于独立开发的mock数据
    test                //测试目录
    .gitignore
    fis-conf.js
    package.json
    README.md
```

注：当前components、directives、filters、pages、images、plugins以及test中的文件都为测试文件或文件夹占位文件，
    具体使用中，请将其中的文件删除，然后就可以开开心心的写代码了，哈哈哈哈。。。。
    
    
### 使用到的fis插件：

- [fis3-hook-commonjs](https://github.com/fex-team/fis3-hook-commonjs) 前端模块化插件
- [fis3-postpackager-loader](https://github.com/fex-team/fis3-postpackager-loader) 前端静态资源加载器。
    用来分析页面中使用的和依赖的资源（js或css），并将这些资源做一定的优化后插入页面。
    
- [fis-parser-node-sass](https://github.com/fex-team/fis-parser-sass) sass预编译插件
- [fis-postprocessor-autoprefixer](https://github.com/ZoomZhao/fis-postprocessor-autoprefixer) css自动补全与清理插件。
    它可以自动补全css3样式，并清理不必要的冗余样式。 注：不支持ie8以下的非css3样式补全，如filter
    
- [fis-optimizer-htmlmin](https://github.com/babyzone2004/fis-optimizer-htmlmin) 压缩html

- [fis-parser-babel-6.x](https://github.com/fex-team/fis-parser-babel-6.x) es6预编译插件
- [fis-parser-babel-5.x](https://github.com/fex-team/fis-parser-babel-5.x) es6预编译插件

> 目前更推荐大家先使用babel5.x。
> 目前6.x我个人使用上来看，有2个问题

> 1. preset的加载非常慢，如果你有使用过6.x模块会发现首次加载的时间在5s左右。可能这和我是使用require而不是字符串声明 preset 有关，
但是没有深究，因为babel的preset寻找机制目前可配置性很低，还不能达到让 fis 的插件方便的加载的程度。
> 2. preset 与 plugin 如果在 fis 插件中提供全量包的话，会造成实际体积的 double，因为 preset 实际上是 plugin 的合集。而不提供全量包的话，
目前来看，会要求用户手动全局安装或者在项目中本地安装，并不是非常理想，也不太契合 fis 的插件理念。
> 当然未来 babel 6 肯定会以更大力度想办法去支持，不过不知道 babel 5 和 babel 6 除了在插件机制外，有什么实际性在功能上的差距么？



### 添加的vue插件：
    
- [vue-router](http://vuejs.github.io/vue-router/zh-cn/index.html) Vue.js 官方路由。与 Vue.js 内核深度整合，让构建单页应用易如反掌。
- [vue-resource](https://github.com/vuejs/vue-resource    ) 通过 XMLHttpRequest 或 JSONP 发起请求并处理响应。
- [vue-async-data](https://github.com/vuejs/vue-async-data) 异步加载数据插件。
- [vue-validator](https://github.com/vuejs/vue-validator) vue 表单验证插件。



### 添加的第三方插件

- [layer](http://layer.layui.com/) layer是一款近年来备受青睐的web弹层组件。
- [layDate](http://laydate.layui.com/) 基于原生JavaScript的一款日期控件。
- [layPage](http://laypage.layui.com/) layPage是一款多功能的js分页组件，即适用于异步分页，又可用于传统的整页刷新跳页，还支持信息流加载，并且可无缝迁移至Node.js平台。layPage不依赖于任何第三方库，直接拿来用即可。



