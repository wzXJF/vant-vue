<template>
  <div class="product-goods">
    <div class="item"
         v-for="item in productList"
         :key="item.id">
      <img :src="item.small_image"
           alt="">
      <p class="item-title">{{ item.name }}</p>
      <p class="item-spec">{{ item.spec }}</p>
      <span class="price">￥{{ item.price }}</span>
      <span class="origin-price">￥{{ item.origin_price }}</span>
    </div>
  </div>
</template>

<script>
import img1 from '../../../../assets/images/goods/list-1.jpg'
import img2 from '../../../../assets/images/goods/list-2.jpg'
import img3 from '../../../../assets/images/goods/list-3.jpg'
import img4 from '../../../../assets/images/goods/list-4.jpg'

export default {
  data () {
    return {
      productList: [
        {
          "id": "5975d845936edfb35d8c8fa3",
          "name": "康师傅大食代红烧牛肉面 5包/袋",
          "origin_price": "4.90",
          "price": "4.90",
          "spec": "方便面的酸爽宗师",
          "small_image": img1,
        },
        {
          "id": "58f8235e916edfca4ccb825c",
          "name": "沈大成鲜肉虾仁小馄饨 120g/袋",
          "origin_price": "15.90",
          "price": "15.90",
          "spec": "124g*5包 大块满足 畅快分享",
          "small_image": img2
        },
        {
          "id": "59b89ee86ec2c40a4d8b4611",
          "name": "康师傅鲜虾鱼板面 98g/盒",
          "origin_price": "8.90",
          "price": "8.90",
          "spec": "香浓软滑 肉质鲜嫩",
          "small_image": img3
        },
        {
          "id": "599b8ba4936edf990d8e98ee",
          "name": "康师傅红烧牛肉面 106g/盒",
          "origin_price": "4.50",
          "price": "3.90",
          "spec": "新老包装交替~",
          "small_image": img4
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.product-goods {
  background-color: #f5f5f5;
  padding-top: 5px;
  padding-left: 2%;
  // display: flex;
  // flex-wrap: wrap;
  height: 100%;
  // -webkit-align-content: stretch;
  // -webkit-flex-direction: row;
  .item {
    position: relative;
    display: inline-block;
    width: 48%;
    margin-right: 2%;
    background-color: #fff;
    margin-bottom: 5px;
    padding-bottom: 5px;
    img {
      width: 100%;
      // height: 100%;
      background-size: contain;
    }
    .item-title {
      padding-left: 8px;
      padding-right: 8px;
      line-height: 17px;
      font-size: 12px;
      word-break: break-all;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .item-spec {
      padding-left: 8px;
      padding-right: 8px;
      color: gray;
      padding-top: 5;
      font-size: 12px;
      line-height: 17px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;
      margin-bottom: 25px;
    }
    .price {
      color: #f37078;
      padding-left: 8px;
      font-size: 14px;
    }
    .origin-price {
      font-size: 12px;
      color: gray;
      text-decoration: line-through;
    }
  }
}
</style>