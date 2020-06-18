# 此项目主要是作为vue+vant技术栈开发移动端应用的框架，主要配置项有：

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

## 主要的目的就是帮助开发者快速的搞定框架的一些基础配置，不用再花半天的时间去配置基础项
1.已经配置好 rem 的基础配置，基本标准是iPhone6的 375px
2.使用的是axios做网络请求，然后基于它做了一些封装 request.js 同时内部还统一做了加载视图的显示和隐藏，
  settings.js类是存放所有项目中的接口地址
3.该框架已经配置好 vuex，目录在 src 下的store文件夹下
4.登录状态的问题使用 js-cookie 处理，登录状态有效时间为2天
5.vant的使用的是全局引入，如果想按需引入，请参考 vant 文档 https://youzan.github.io/vant/#/zh-CN/quickstart

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
