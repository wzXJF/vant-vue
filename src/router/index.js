import Vue from "vue";
import Router from "vue-router";
import { getToken } from "@/utils/auth.js";

Vue.use(Router);

const router = new Router({
  // 解决路由跳转页面没有置顶
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  },
  routes: [
    {
      path: "/login",
      component: () => import("@/pages/login/login.vue")
    },
    {
      path: "/",
      redirect: "/dashboard",
      meta: {
        keepAlive: true
      }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("@/pages/dashboard/dashboard.vue"),
      meta: {
        keepAlive: true
      },
      children: [
        {
          path: "/dashboard",
          redirect: "/dashboard/home",
          // 是否数据缓存
          meta: {
            keepAlive: true
          }
        },
        {
          // 主页
          path: "home",
          name: "home",
          component: () => import("@/pages/home/home.vue"),
          // 是否数据缓存
          meta: {
            keepAlive: true
          }
        },
        {
          // 分类
          path: "category",
          name: "category",
          component: () => import("@/pages/finder/finder.vue"),
          // 是否数据缓存
          meta: {
            keepAlive: true
          }
        },
        {
          // 吃什么
          path: "eat",
          name: "eat",
          component: () => import("@/pages/buyCar/buyCar.vue"),
          // 是否数据缓存
          meta: {
            keepAlive: true
          }
        },
        {
          // 购物车
          path: "cart",
          name: "cart",
          component: () => import("@/pages/order/order.vue"),
          meta: {
            keepAlive: true
          }
        },
        {
          // 我的
          path: "mine",
          name: "mine",
          component: () => import("@/pages/my/my.vue")
        }
      ]
    }
  ]
});

// router.beforeEach((to, from, next) => {
// const token = getToken();
// if (typeof token === "undefined" && to.path !== "/login") {
//   next({ path: "/login" });
// } else {
//   next();
// }
// });

export default router;
