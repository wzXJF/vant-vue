module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            rootValue: 37.5, // 换算的基数
            propList: ["*"]
          }),
          require("autoprefixer")({
            browsers: ["Android >= 4.0", "iOS >= 8"]
          })
        ]
      }
    }
  }
};
