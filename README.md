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
