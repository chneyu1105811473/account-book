<template>
  <div class="login">
    <div class="content">
      <pagoda-cell-group>
        <pagoda-field
          v-model="useInfo.username"
          required
          clearable
          label="用户名"
          placeholder="请输入用户名"
        />
        <pagoda-field
          v-model="useInfo.password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />
      </pagoda-cell-group>
      <pagoda-button type="primary" @click="login">注册/登录</pagoda-button>
    </div>
  </div>
</template>

<script lang="ts">

interface IUserInfo {
  username: string;
  password: string;
}

import { Vue, Component } from "vue-property-decorator";
import { user } from "../../api/index";
import cookie from "../../utils/cookies";
import { get } from "lodash";

@Component
export default class Login extends Vue {
  private useInfo: IUserInfo = {username: "", password: ""};

  private async login() {
    const { username, password } = this.useInfo;
    if (!!username && !!password) {
      try {
        const res = await user.login(this.useInfo);
        cookie.setCookie("token", get(res, "data.accessToken"), 1);
        this.$router.push({
          name: "transactionsList",
        });
      } catch (error) {
        this.$toast(get(error, "message") || "请求出错");
      }
    } else {
      this.$toast("请输入完整用户信息");
    }
  }
}
</script>

<style lang="stylus">
  .login
    display flex
    flex-direction column
    align-items center 
    justify-content center 
    width 100%
    height 100%
    .content
      width 100%
      display flex
      flex-direction column
      button 
        margin-top 40px
</style>    

