<template>
  <div>
    <p>我是发现</p>
    <van-uploader :after-read="afterRead" />
    <van-uploader v-model="fileList"
                  multiple />
    <van-button @click="getFiles">查询</van-button>
    <!-- <input type="file"
           accept="image/*"
           @change="handleSelectFile" />
    <img id="image"
         :src="image"
         alt="" />
    <p>{{ msg }}</p> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      uploadUrl: "",
      image: "",
      msg: "111",
      fileList: []
    };
  },
  methods: {
    getFiles () {
      console.log(this.fileList)
    },
    afterRead (file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    handleSelectFile (e) {
      const file = e.target.files[0];
      console.log(file);

      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = evt => {
        this.image = evt.target.result;
        this.msg = "222";
        console.log(this.$data);
      };
    }
  }
};
</script>

<style lang="scss" scoped>
#image {
  width: 300px;
  height: 300px;
  background-color: gray;
}
</style>
