<template>
  <div class="diffrent">
    <div class="top">
      <span>特色专区</span>
    </div>
    <div class="content">
      <div class="left">
        <div class="left-top common">
          <span>新品尝鲜</span>
          <p>不时不食, 又闻棱角香~</p>
          <img src="../../../../assets/images/dif-1.jpg" alt="" />
          <img src="../../../../assets/images/dif-2.jpg" alt="" />
        </div>
        <div class="left-bottom common">
          <span>新品尝鲜</span>
          <p>不时不食, 又闻棱角香~</p>
          <img src="../../../../assets/images/dif-1.jpg" alt="" />
          <img src="../../../../assets/images/dif-2.jpg" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="right-top common">
          <span>新品尝鲜</span>
          <p>不时不食, 又闻棱角香~</p>
          <img src="../../../../assets/images/dif-1.jpg" alt="" />
          <img src="../../../../assets/images/dif-2.jpg" alt="" />
        </div>
        <div class="right-bottom common">
          <span>新品尝鲜</span>
          <p>不时不食, 又闻棱角香~</p>
          <img src="../../../../assets/images/dif-1.jpg" alt="" />
          <img src="../../../../assets/images/dif-2.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.diffrent {
  background-color: #fff;
  padding-top: 30px;
  .top {
    height: 30px;
    font-size: 18px;
    padding-left: 10px;
    span {
      display: inline-block;
      border-left: 4px solid #3cb963;
      padding-left: 5px;
    }
  }
  .content {
    border: 1px solid #dddbc0;
    box-sizing: border-box;
    width: 95%;
    height: 175px;
    margin: 0 auto;
    display: flex;
    background-color: #dddbc0;
    .left {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-right: 1px;
      .left-top {
        margin-bottom: 1px;
      }
    }
    .common {
      flex: 1;
      padding: 3px 0 0 5px;
      background-color: #fff;
      font-size: 13px;
      span {
        background-image: linear-gradient(135deg, red, orange);
        color: transparent;
        -webkit-background-clip: text;
      }
      p {
        margin-top: 3px;
        color: gray;
      }
      img {
        padding: 5px 10px 0;
        width: 51px;
        height: 43px;
      }
    }

    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      .right-top {
        margin-bottom: 1px;
      }
      .right-bottom {
        flex: 1;
        background-color: #fff;
      }
    }
  }
}
</style>
