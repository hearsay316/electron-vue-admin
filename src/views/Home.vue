<template>
  <div class="home">
    <div class="home-login">
      <h3 class="home-login-title">登录到用户中心</h3>
      <el-form
        ref="dynamicValidateForm"
        label-width="50px"
        class="demo-dynamic"
      >
        <el-form-item prop="name" label="手机">
          <el-input @input="inputName" v-model="name"></el-input>
          <span>{{ errorName }}</span>
        </el-form-item>

        <el-form-item prop="pass" label="密码">
          <el-input
            type="password"
            @input="inputPass"
            v-model="pass"
          ></el-input>
          <span>{{ errorPass }}</span>
        </el-form-item>

        <el-form-item>
          <el-button type="primary">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      name: " ",
      pass: " ",
      errorName: " ",
      errorPass: " "
    };
  },
  methods: {
    inputName() {
      // eslint-disable-next-line no-console
      console.log(11);
      let num = parseInt(this.name);
      if (num && this.name.length == 11) {
        this.errorName = "填写正确 ";
      } else {
        this.errorName = "填写错误 ";
      }
    },
    inputPass() {
      let num = parseInt(this.pass);
      if (!num && this.pass.length > 6) {
        this.errorPass = "填写正确";
      } else {
        this.errorPass = "填写错误";
      }
    }
  }
};
</script>
<style lang="stylus">
.home
    width 100%
    height 100%
    background url("https://cn.bing.com/th?id=OHR.HallXmasMarket_ZH-CN8059544504_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp")
    background-size cover
    position relative
    .home-login
        box-sizing border-box
        background-color white
        height: 350px
        width 500px
        position absolute
        right 0;
        left 0
        top 0
        bottom 0
        margin auto
        padding-left  15px
        padding-right 15px
        padding-top 25px
        border-radius 15px
        .home-login-title
            text-align center
</style>
