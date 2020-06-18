<template>
  <div>
    <van-field v-model="phone"
               name="手机号"
               label="手机号"
               placeholder="手机号"
               :rules="[{ required: true, message: '请填写手机号' }]" />
    <van-field v-model="code"
               name="验证码"
               label="验证码"
               placeholder="验证码"
               :rules="[{ required: true, message: '请填写验证码' }]" />
    <van-button type="default"
                @click="getCode">获取验证码</van-button>
    <van-button type="default"
                @click="login">登录</van-button>
    <van-image src="https://img.alicdn.com/tfs/TB1Sv5PV9zqK1RjSZPcXXbTepXa-80-80.png"></van-image>
  </div>
</template>

<script>
import api from '@/api'
import vueObj from '@/main.js'

export default {
  data () {
    return {
      phone: '',
      code: '',
      show: true
    }
  },
  mounted () {
  },
  methods: {
    async getCode () {
      let res = await api.request('post', this.HOST + 'users/sendCode', { phone: this.phone });
      console.log(res);
    },
    async login () {
      let res = await api.request('post', this.HOST + 'users/codePhoneLogin', { phone: this.phone, code: this.code });
      console.log(res);
    }
  },
}
</script>

<style lang="sass" scoped>
</style>