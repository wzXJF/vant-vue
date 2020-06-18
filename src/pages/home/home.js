export default {
  data() {
    return {};
  },
  components: {
    Header: () => import("./components/header/Header.vue"),
    Swiper: () => import("./components/swiper/swiper.vue"),
    Tip: () => import("./components/Tip/Tip.vue"),
    Nav: () => import("./components/nav/Nav.vue"),
    VipTip: () => import("./components/vipTip/Viptip.vue"),
    FlashBuy: () => import("./components/flash/FlashBuy.vue"),
    Diffrent: () => import("./components/diffrent/diffrent.vue"),
    TabbarGood: () => import("./components/tabbar/TabbarGoodsItem.vue")
  }
};
