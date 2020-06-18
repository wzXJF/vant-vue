# 此项目主要是作为以后所有后台管理系统的框架模板，主要配置项有：

1. css: 主要配置的是 scss 模式 同时引入公共样式库 normalize.css
2. vue-router
3. vuex
4. axios
5. vant(按需引入已配置)
6. .gz 打包已配置
7. 此项目已经对左侧的菜单栏做了添加和适配处理
8. 每次打包都会生成不一样的 js 和 css 文件，防止版本更新时，页面不变，而需要自己手动刷新
   说明：如果和此框架有差异化，可根据自己的需求，自己做相应的修改即可
9. 使用 amfe-flexible postcss-pxtorem rem 适配

   > A Vue.js project

> A Vue.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 开发过程中遇到的问题总结

### 1.关于文字的一些操作 css 属性

(1)white-space 属性设置如何处理元素内的空白
normal: 空白会被浏览器忽略
pre: 空白会被浏览器保留
nowrap: 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止
pre-wrap: 保留空白符序列，但是正常地进行换行。
pre-line: 合并空白符序列，但是保留换行符。
inherit: 从父元素中继承 white-space
(2)text-overflow 当文字溢出包含元素时应该如何显示
clip: 修剪文字
ellipsis: 显示省略符号来代表被修剪的文本
string: 使用给定的字符串来代表被修剪的文本
(3)-webkit-line-clamp 属于不规范的 css 属性，需要配合-webkit 使用，主要是设置显示的行数，需要下面两个属性做配合：
display: -webkit-box; 将对象作为弹性伸缩盒子模型显示
-webkit-box-orient 设置或检索伸缩盒对象的子元素的排列方式 。

### 主要涉及到的是 this 的指向问题

问题描述：在使用 Vue 时候，使用原生的 input 元素进项图片的上传操作，选择图片成功后，有一个 reader.onload = function (evt) {} 回调函数，然后主要是为了显示图片，在这个回调函数中直接使用 this.image = evt.target.result 能获取到刚才选择要上传的图片，但是在 Dom 节点上动态的绑定 src 属性 并没有显示图片，为什么呢？
原因：这个问题主要是因为函数内部的 this 的执行问题，在回调函数中的 this 其实是指向 reader 对象的，所以在函数中的赋值操作只是给 render 对象上添加了一个 image 属性，和该组件的 this 实例是没有任何关系的，所以 dom 元素没有更新
解决方案：1. 可以把回调函数修改为 ES6 的箭头函数，那么箭头函数内部的 this 是指向外部的 this，也就是组件实例 2. 可以在函数外层定义一个全局的对象，let \_this = this; 然后在函数内部直接使用 \_this 对象即可，这样也是直接使用了全部的 this，也就是组件实例，那么就不会出现之前我们遇到的那个问题了。

### 涉及到子元素的 margin-top 影响父元素的布局，直接导致父元素也出现相应的 margin-top

原因：一个盒子如果没有上补白(padding-top)和上边框(border-top)，那么这个盒子的上边距会和其内部文档流中的第一个子元素的上边距重叠
解决方案：1.可以给父元素添加 border 或者 padding-top 或者设置 overflow：hidden 2.给父元素或者子元素设置 float 或者 position: absolute.
