// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue: 37.5, //根元素大小设置，也就是html的font-size大小
      unitPrecision: 5, //保留rem小数点多少位
      propList: ["*", "!border*", "!font-size*"], //  是一个存储哪些将被转换的属性列表，这里设置为['*']全部，假设需要仅对边框进行设置，可以写['*', '!border*']
      selectorBlackList: [".xue"], //则是一个对css选择器进行过滤的数组，比如你设置为['fs']，那例如fs-xl类名，里面有关px的样式将不被转换，这里也支持正则写法。
      replace: true, //这个真不知到干嘛用的。有知道的告诉我一下
      mediaQuery: false, //媒体查询( @media screen 之类的)中不生效
      minPixelValue: 12 //px小于12的不会被转换
    }
  }
};
