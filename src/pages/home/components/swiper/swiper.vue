<template>
  <div class="swiper">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images"
                      :key="index">
        <img class="image-view"
             :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import first from '@/assets/images/swiper/1.jpg';
import sec from '@/assets/images/swiper/2.jpg';
import thir from '@/assets/images/swiper/3.jpg';
import four from '@/assets/images/swiper/4.jpg';

export default {
  data () {
    return {
      images: [
        first, sec, thir, four
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.swiper {
  padding-top: 44px;
  width: 95%;
  height: 6rem;
  border-radius: 17px;
  overflow: hidden;
  margin: 0 auto;
  .image-view {
    width: 100%;
    height: 100%;
  }
}
</style>