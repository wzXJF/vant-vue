<template>
  <div class="home-view">
    <div class="head">
      <Header></Header>
      <Swiper></Swiper>
      <Tip></Tip>
    </div>
    <Nav></Nav>
    <VipTip></VipTip>
    <FlashBuy></FlashBuy>
    <Diffrent></Diffrent>
    <TabbarGood></TabbarGood>
    <van-divider>我是有底线的</van-divider>
  </div>
</template>

<script>
import home from "./home.js";
export default home;
</script>

<style lang="scss" scoped>
.home-view {
  width: 100%;
  background-color: #f5f5f5;
  padding-bottom: 50px;
  .head {
    width: 100%;
    background-image: url("../../assets/images/backImage.png");
  }
}
</style>
