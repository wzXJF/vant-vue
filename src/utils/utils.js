import Vue from "vue";
const utils = {};

utils.install = (Vue, options) => {
  Vue.mixin({
    data() {
      return {
        isMoreNet: false
      };
    },
    methods: {
      islogin() {
        //此函数可在任何页面引用， 引用方式 this.islogin();
        //检查是否登陆
      },
      isPhoneNumber(num) {
        //检查是否是手机号
        return /^1[2,3,4,5,7,8]\d{9}$/.test(num);
      },
      isName(name) {
        //检测中英文姓名
        return /[a-zA-Z\u4E00-\u9FA5]+$/.test(name);
      },
      trim(str) {
        //去掉文字得空格
        return str.replace(/(^\s*)|(\s*$)/g, "");
      },
      // 格式化时间为 yyyy-MM-dd
      formatDate(time) {
        if (time != null && time != "") {
          let date = new Date(time);
          let y = date.getFullYear();
          let MM = date.getMonth() + 1;
          MM = MM < 10 ? "0" + MM : MM;
          let d = date.getDate();
          d = d < 10 ? "0" + d : d;
          return y + "-" + MM + "-" + d;
        } else {
          return "--";
        }
      },
      // 显示加载
      showLoading(el) {
        el.loading({
          message: "加载中...",
          forbidClick: true,
          loadingType: "spinner"
        });
      },
      // 隐藏加载
      hiddleLoading(el) {
        el.clear();
      }
    }
  });
  // 这块可以写组件
  Vue.component("pageSize", {
    props: ["size", "total", "page", "currChange"],
    template:
      '<el-pagination background :page-size="size" :total="total" :current-page="page" @current-change="currChange" layout="total, prev, pager, next"></el-pagination>'
  });

  Vue.component("table"),
    {
      props: ["tableData"],
      template: ` <el-table :data="tableData"  style="width: 100%">
                    <el-table-column  v-for="(item i) in tableData">
                    </el-table-column>
                </el-table>`
    };

  // 这块可以写指令
  Vue.directive("xxx", function(el, binding) {});
  Vue.directive("focus", {
    inserted: el => {
      el.focus();
    }
  });
};
// 格式化时间为 yyyy-MM-dd
Vue.filter("formatDate", function(time) {
  if (time != null && time != "") {
    let date = new Date(time);
    let y = date.getFullYear();
    let MM = date.getMonth() + 1;
    MM = MM < 10 ? "0" + MM : MM;
    let d = date.getDate();
    d = d < 10 ? "0" + d : d;
    return y + "-" + MM + "-" + d;
  } else {
    return "--";
  }
});

export default utils;
