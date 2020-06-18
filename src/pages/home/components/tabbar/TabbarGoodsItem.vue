<template>
  <div class="tabbar-goods">
    <van-tabs v-model="active"
              sticky
              swipeable
              color="#43b767"
              title-active-color="#43b767"
              :offset-top="38">
      <van-tab v-for="(item) in list"
               :title="item.title"
               :key="item.id">
        <ProduceItem></ProduceItem>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import ProduceItem from './ProduceItem.vue'

export default {
  data () {
    return {
      active: "0",
      list: [
        {
          title: "全部",
          id: "1"
        },
        {
          title: "晚餐",
          id: "2"
        },
        {
          title: "人气",
          id: "3"
        },
        {
          title: "必选",
          id: "4"
        }
      ]
    };
  },
  components: {
    ProduceItem
  }
};
</script>

<style lang="scss" scoped>
.tabbar-goods {
  padding-top: 10px;
  background-color: #fff;
}
</style>
