<template>
  <div class="header"
       :style="showBgColor ? 'background-color: white;' : ''">
    <div class="left">
      <van-icon class="location"
                name="location-o" />
      <span>北京天安门</span>
    </div>
    <div class="right">
      <div class="input-view">
        <div class="total-view">
          <van-icon class="icon"
                    name="search"
                    color="#888" />
          <span class="input-span"
                style="color: #999;">输入商品名称</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showBgColor: false
    };
  },
  mounted () {
    let that = this;
    that.$nextTick(() => {
      //监听滚动事件
      window.addEventListener("scroll", that.handleScroll);
    });
  },
  methods: {
    handleScroll () {
      let that = this;
      //垂直滚动的值兼容问题
      let scrollTopE =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let screenHeight = window.screen.availHeight;
      if (scrollTopE > 180) {
        // 添加搜索栏颜色
        this.showBgColor = true;
      } else {
        this.showBgColor = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  z-index: 1001;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  background: "";
  display: flex;
  align-items: center;
  padding-right: 5px;
  .left {
    background-color: #000;
    opacity: 0.6;
    height: 34px;
    max-width: 55%;
    line-height: 34px;
    border-radius: 17px;
    font-size: 14px;
    color: #fff;
    padding: 0 7px 2px;
    font-size: 16px;
    overflow: hidden;
    .location {
      // margin-top: 9px;
      vertical-align: middle;
    }
    span {
      // display: inline-block;
      // line-height: 100%;
      // height: 100%;
      vertical-align: middle;
      font-size: 12px;
    }
  }
  .right {
    height: 34px;
    line-height: 34px;
    flex: 1;
    .input-view {
      flex: 1;
      border-radius: 17px;
      background-color: #f2f2f2;
      height: 100%;
      margin-right: 5px;
      margin-left: 5px;
      text-align: center;
      .total-view {
        height: 34px;
        text-align: center;
        width: 116px;
        margin: 0 auto;
        .icon {
          font-size: 22px;
          line-height: 34px;
          float: left;
        }
        span {
          font-size: 12px;
          line-height: 34px;
          display: block;
          float: left;
        }
      }
    }
  }
}
</style>
