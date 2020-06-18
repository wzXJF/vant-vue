<template>
  <div class="flash">
    <div class="flash-top">
      <div class="flash-time">
        <span class="title">限时抢购</span>
        <van-count-down class="count-view"
                        :time="time">
          <template v-slot="timeData">
            <span class="block">{{ timeData.hours }}</span>
            <span class="block">{{ timeData.minutes }}</span>
            <span class="block">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
      </div>
      <div class="flash-more">更多</div>
    </div>
    <div class="flash-content">
      <FlashFood />
    </div>
  </div>
</template>

<script>
import FlashFood from './FlashFood.vue'
export default {
  data () {
    return {
      time: 30 * 60 * 1000 * 100
    }
  },
  components: {
    FlashFood
  }
}
</script>

<style lang="scss" scoped>
.flash {
  margin-top: 30px;
  .flash-top {
    display: flex;
    height: 30px;
    width: 95%;
    margin: 0 auto;
    box-sizing: border-box;
    justify-content: space-between;
    .flash-time {
      overflow: hidden;
      .title {
        border-left: 4px solid #3cb963;
        font-size: 18px;
        color: #000;
        padding-left: 4px;
        float: left;
      }
      .count-view {
        float: left;
        margin-left: 10px;
        .block {
          display: inline-block;
          width: 22px;
          color: #fff;
          font-size: 13px;
          text-align: center;
          background-color: #000;
        }
      }
    }
    .flash-more {
      color: #3cb963;
      font-size: 15px;
    }
  }
}
</style>