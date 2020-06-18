<template>
  <div class="flash-food">
    <div class="flashItemwrapper">
      <ul class="itemWrapper"
          ref="ulWrapper">
        <li class="itemInCovers"
            ref="productItem">
          <img class="itemImage"
               :src="food" />
          <span>四季宝柔滑花生酱 340g/瓶</span>
          <div class="price">
            <div class="left">
              <p>¥16.90</p>
              <p>¥19.90</p>
            </div>
            <div class="buy-car">
              <van-icon name="cart-o"></van-icon>
            </div>
          </div>
        </li>
        <li class="itemInCovers">
          <img class="itemImage"
               :src="food" />
          <span>四季宝柔滑花生酱 340g/瓶</span>
          <div class="price">
            <div class="left">
              <p>¥16.90</p>
              <p>¥19.90</p>
            </div>
            <div class="buy-car">
              <van-icon name="cart-o"></van-icon>
            </div>
          </div>
        </li>
        <li class="itemInCovers">
          <img class="itemImage"
               :src="food" />
          <span>四季宝柔滑花生酱 340g/瓶</span>
          <div class="price">
            <div class="left">
              <p>¥16.90</p>
              <p>¥19.90</p>
            </div>
            <div class="buy-car">
              <van-icon name="cart-o"></van-icon>
            </div>
          </div>
        </li>
        <li class="itemInCovers">
          <img class="itemImage"
               :src="food" />
          <span>四季宝柔滑花生酱 340g/瓶</span>
          <div class="price">
            <div class="left">
              <p>¥16.90</p>
              <p>¥19.90</p>
            </div>
            <div class="buy-car">
              <van-icon name="cart-o"></van-icon>
            </div>
          </div>
        </li>
        <li class="itemInCovers">
          <img class="itemImage"
               :src="food" />
          <span>四季宝柔滑花生酱 340g/瓶</span>
          <div class="price">
            <div class="left">
              <p>¥16.90</p>
              <p>¥19.90</p>
            </div>
            <div class="buy-car">
              <van-icon name="cart-o"></van-icon>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import food from "@/assets/images/food.jpg";

export default {
  data () {
    return {
      food: food
    };
  },
  mounted () {
    this.$nextTick(() => {
      let contentWrapperWidth = 0;
      let el = this.$refs.productItem;
      contentWrapperWidth = Math.ceil(el.getBoundingClientRect().width
      ) * 5;
      console.log(el.getBoundingClientRect().width);
      // 给ul设置值
      this.$refs.ulWrapper.style.width = contentWrapperWidth + "px";
      if (!this.scroll) {
        // 名字一定要唯一 和父组件独立
        this.scroll = new BScroll(".flashItemwrapper", {
          probeType: 2,
          startX: 0,
          click: true,
          scrollX: true,
          scrollY: false,
          eventPassthrough: "vertical"
        });
      } else {
        this.scroll.refresh();
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.flash-food {
  overflow: hidden;
}
.itemWrapper {
  background-color: #fff;
  overflow: hidden;
  .itemInCovers {
    float: left;
    align-items: center;
    width: 114px;
    padding-right: 10px;
    box-sizing: border-box;
    img {
      width: 100%;
      background-size: contain;
    }
    span {
      display: inline-block;
      padding-left: 5px;
      font-size: 12px;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 16px;
      height: 32px;
      overflow: hidden;
    }
    .price {
      display: flex;
      padding-left: 5px;
      justify-content: space-between;
      .left {
        p:nth-child(1) {
          color: #f37078;
          font-size: 15px;
        }
        p:nth-child(2) {
          color: #999;
          font-size: 12px;
          text-decoration: line-through;
        }
      }
      .buy-car {
        width: 24px;
        height: 24px;
        font-size: 24px;
      }
    }
  }
}
</style>
