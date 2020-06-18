<template>
  <div style="overflow: hidden; margin:0; padding:0;">
    <div class="tip-top">
      <div class="tip-box">
        <img :src="trans"
             alt="">
        <span class="tipText">最快29分钟内送达</span>
      </div>
      <div class="tip-box">
        <img :src="mon"
             alt="">
        <span class="tipText">0元起送 0配送费</span>
      </div>
      <div class="tip-box">
        <img :src="seal"
             alt="">
        <span class="tipText">安心退</span>
      </div>
    </div>
    <div class="tip-bottom">
      <img class="adImg"
           :src="homeAd">
    </div>
  </div>
</template>

<script>
import mon from '@/assets/images/icon/money.png'
import seal from '@/assets/images/icon/seal.png'
import trans from '@/assets/images/icon/transport.png'
import homeAd from '@/assets/images/icon/homead2.gif'

export default {
  data () {
    return {
      mon: mon,
      seal: seal,
      trans: trans,
      homeAd: homeAd
    }
  },
}
</script>

<style lang="scss" scoped>
.tip-top {
  margin-top: 10px;
  display: flex;
  font-size: 12px;
  color: #5ac066;
  .tip-box {
    flex: 1;
    text-align: center;
    img {
      width: 17px;
      height: 17px;
      vertical-align: middle;
    }
  }
}
.tip-bottom {
  margin: 0;
  padding: 0;
  margin-top: 10px;
  overflow: hidden;
  .adImg {
    width: 100%;
    height: 100%;
    margin-bottom: -6px;
  }
}
</style>