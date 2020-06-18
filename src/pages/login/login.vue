<template>
  <div class="login-view">
    <div class="middle-view">
      <p class="login-title">登录</p>
      <el-form :model="loginForm"
               :rules="rules"
               ref="ruleForm"
               class="form-view">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username"
                    placeholder="请输入账号"
                    prefix-icon="el-icon-s-custom"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password"
                    show-password
                    placeholder="请输入密码"
                    prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     class="login-btn"
                     :disabled="!canClick"
                     @click="loginHandle('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import login from './login.js'
export default login;
</script>

<style lang="scss" scoped>
.login-view {
  background-color: #d1d1d1;
  width: 100%;
  height: 100%;
  position: relative;
  .middle-view {
    position: absolute;
    background-color: #fff;
    width: 500px;
    height: 300px;
    border-radius: 5px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    box-sizing: border-box;
    .login-title {
      font-size: 24px;
      text-align: center;
      font-weight: 500;
    }
    .form-view {
      margin-top: 30px;
      padding: 0 40px 0 40px;
      .login-btn {
        width: 100%;
        margin-top: 20px;
      }
    }
  }
}
</style>
