<template>
  <div id="dashboard">
    <!-- 缓存界面选择加载 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />

    <van-tabbar v-model="active"
                :safe-area-inset-bottom="true"
                class="active_tab"
                active-color="#75a342">
      <!-- 给购物车的Tabbar加个ID 方便做加入购物车的小球动画 -->
      <van-tabbar-item v-for="(item, index) in tabbars"
                       :key="index + item.name"
                       :id="index == 3 ? 'buycar' : ''"
                       @click="tab(index, item.name)"
                       :info="item.name == 'cart' ? goodsNum : ''">
        <span :class="currIndex == index ? active : ''">{{
          item.title
        }}</span>
        <template slot="icon"
                  slot-scope="props">
          <img :src="props.active ? item.active : item.normal" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'DashBoard',
  data () {
    return {
      currIndex: 0,
      active: 0,
      goodsNum: 0,
      tabbars: [
        {
          name: 'home',
          title: '首页',
          normal: require('@/assets/images/tabbar/home_default.png'),
          active: require('@/assets/images/tabbar/home_selected.png')
        },
        {
          name: 'category',
          title: '分类',
          normal: require('@/assets/images/tabbar/category_default.png'),
          active: require('@/assets/images/tabbar/category_selected.png')
        },
        {
          name: 'eat',
          title: '吃什么',
          normal: require('@/assets/images/tabbar/eat_default.png'),
          active: require('@/assets/images/tabbar/eat_selected.png')
        },
        {
          name: 'cart',
          title: '购物车',
          normal: require('@/assets/images/tabbar/shoppingcart_default.png'),
          active: require('@/assets/images/tabbar/shoppingcart_selected.png'),
          num: 5
        },
        {
          name: 'mine',
          title: '我的',
          normal: require('@/assets/images/tabbar/mine_default.png'),
          active: require('@/assets/images/tabbar/mine_selected.png')
        }
      ]
    }
  },
  created () {
    //通过路由跳转绑定Tabbar的选中
    this.tabbarSelected(this.$route.name)
  },
  watch: {
    // 监听路由变化,保证路由跳转Tabbar选中正常
    $route: {
      handler (val, oldval) {
        this.tabbarSelected(val.name)
      }
    },
    deep: true
  },
  methods: {
    // 1.点击tabbar触发的方法
    tab (index, val) {
      this.currIndex = index
      this.$router.push(val)
    },
    tabbarSelected (item) {
      const mapType = {
        home: 0,
        category: 1,
        eat: 2,
        cart: 3,
        mine: 4
      }
      console.log(item);
      this.active = mapType[item]
    }
  },
}
</script>
<style lang="scss" scoped>
#dashboard {
  width: 100%;
  height: 100%;
}
/*转场动画*/
.router-slider-enter-active,
.router-slider-leave-active {
  transition: all 0.3s;
}
.router-slider-enter,
.router-slider-leave-active {
  transform: translate3d(2rem, 0, 0);
  opacity: 0;
}
@keyframes mymove {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
@-moz-keyframes mymove {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
@-webkit-keyframes mymove {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
@-o-keyframes mymove {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
.moveToCart {
  animation: mymove 0.5s ease-in-out;
}
</style>