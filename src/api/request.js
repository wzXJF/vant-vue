import axios from "axios";
import store from "../store";
import { getToken } from "@/utils/auth";
import { Toast } from "vant";
import vueObj from "@/main.js";
/**
 * 如果是同时调用多个网络请求，由于不好控制，故先由组件自己控制
 * 1. vueObj.isMoreNet = true; 全局的vue实例
 * 2. 显示 this.showLoading(this.$toast);
 * 3. 隐藏 this.hiddleLoading(this.$toast);
 * 4. 使用过后应及时把全局的 isMoreNet 重新设置为 false
 *
 * 如果只是一个网络请求，那么我们可以不用设置任何事物，会自动加载
 */

// 创建axios实例
const service = axios.create({
  timeout: 300000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  config => {
    console.log(vueObj);
    console.log(vueObj.isMoreNet || "111");

    vueObj.isMoreNet ||
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
        loadingType: "spinner"
      });

    if (store.getters.token) {
      config.headers["Authorization"] = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    } else {
    }

    // if (config.headers["Content-Type"] != "multipart/form-data") {
    //   config.method === "post"
    //     ? (config.data = Qs.stringify({ ...config.data }))
    //     : (config.params = { ...config.params });
    // }
    config.headers["customer_id"] = "YIJIE_2017_FAKE";

    return config;
  },
  error => {
    Toast("请求超时!");
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非200是抛错 可结合自己业务进行修改
     */
    vueObj.isMoreNet || Toast.clear();
    const res = response.data;
    if (res.code === 200) {
      return res;
    } else {
      // Message({
      //   message: res.message,
      //   type: "error",
      //   duration: 5 * 1000
      // });

      // 此处可以做相关的内容token失效处理
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //   MessageBox.confirm(
      //     "你已被登出，可以取消继续留在该页面，或者重新登录",
      //     "确定登出",
      //     {
      //       confirmButtonText: "重新登录",
      //       cancelButtonText: "取消",
      //       type: "warning"
      //     }
      //   )
      //     .then(() => {
      //       store.dispatch("FedLogOut").then(() => {
      //         location.reload(); // 为了重新实例化vue-router对象 避免bug
      //       });
      //     })
      //     .catch(() => {});
      // }
      return Promise.reject("error");
    }
  },
  error => {
    console.log("err" + error); // for debug
    vueObj.isMoreNet || Toast.clear();
    Toast(error);
    return Promise.reject(error);
  }
);

export default (type, url, parameData, callback) => {
  return new Promise((resolve, reject) => {
    service[type](url, parameData)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(err.toString());
        reject(err);
        if (callback) {
          callback(err.response);
        }
      });
  });
};
