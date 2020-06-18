<template>
  <div>
    <van-grid :column-num="5"
              :border="false">
      <van-grid-item v-for="nav in navList"
                     :key="nav.cid"
                     :icon="nav.icon_url"
                     :text="nav.name" />
    </van-grid>
  </div>
</template>

<script>
import icon1 from '@/assets/images/nav/icon-1.jpg'
import icon2 from '@/assets/images/nav/icon-2.jpg'
import icon3 from '@/assets/images/nav/icon-3.jpg'
import icon4 from '@/assets/images/nav/icon-4.jpg'
import icon5 from '@/assets/images/nav/icon-5.jpg'

export default {
  data () {
    return {
      navList: [
        {
          cid: 1,
          name: '安心蔬菜',
          icon_url: icon1
        },
        {
          cid: 2,
          name: '豆制品',
          icon_url: icon2
        },
        {
          cid: 3,
          name: '水果',
          icon_url: icon3
        },
        {
          cid: 4,
          name: '肉禽蛋',
          icon_url: icon4
        },
        {
          cid: 5,
          name: '海鲜水产',
          icon_url: icon5
        },
        {
          cid: 6,
          name: '乳品烘焙',
          icon_url: icon1
        },
        {
          cid: 7,
          name: '营养早餐',
          icon_url: icon2
        },
        {
          cid: 8,
          name: '叮咚心选',
          icon_url: icon3
        },
        {
          cid: 9,
          name: '米面粮油',
          icon_url: icon4
        },
        {
          cid: 10,
          name: '调味品',
          icon_url: icon5
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
</style>