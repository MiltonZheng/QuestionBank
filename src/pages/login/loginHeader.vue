<template>
  <div class="logheader" style="height: 50px">
    <div class="logheader-left">
      <img src="../../assets/loghust.png"
           class="loghust"
      >
    </div>
    <div class="logheader-right">
      <div class="hidden-xs-only" style="margin: auto">
        <span class="infoBlockContainer">热点问题</span>
        <el-divider direction="vertical"></el-divider>
        <span class="infoBlockContainer">使用帮助</span>
        <el-divider direction="vertical"></el-divider>
        <span class="infoBlockContainer">在线客服</span>
        <el-divider direction="vertical"></el-divider>
        <span class="infoBlockContainer">使用建议</span>
      </div>

      <!--下拉菜单，响应式布局-->
      <div class="hidden-sm-and-up">
        <el-dropdown trigger="click">
          <el-button type="primary"
                     style="background-color: transparent; border-color: transparent; margin-top:5px"
                     class="el-icon-plus">
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>热点问题</el-dropdown-item>
            <el-dropdown-item>使用帮助</el-dropdown-item>
            <el-dropdown-item>在线客服</el-dropdown-item>
            <el-dropdown-item>使用建议</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginHeader"
}
</script>

<style scoped>

.hidden-xs-only{
  transition: all 1s;
}

.loginContainer {
  width: 50%;
  height: 100%;
  float: right;
  display: table;
}

.loghust{
  height: 100%;
}

.loginForm {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  color: white;
  font-size: 18px;
  animation: .5s linear normal loginFormAnime;
}

.aa {
  margin: auto;
  float: none;
  width: 400px;
}

.logheader {
  display: flex;
  justify-content: space-between;
  height: 80px;
  background-color: #545c64;
  color: #ffffff;
}

.logheader-left {

}

.logMain {
  padding: 0;
  background: url("http://hub.hust.edu.cn/images/login-1.jpg ") no-repeat;
  background-size: cover;

  box-shadow: inset 0.5px 0.2px 5px 0px #eeeeee;
}

.logheader-right {
  display: flex;
}

.log-layout {
  width: 100%;
  height: 100%;
}

.formContainer {
  width: 320px;
  height: 470px;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 40px;
  margin-left: 210px;
}

.formWrapper {
  margin: auto;
  height: 400px;
}

.el-form {
  width: 270px;
  margin: auto;
}

.buttonContainer {
  display: flex;
  flex-direction: column;
  font-size: 20px;
}

.h3 {
  line-height: 60px;
  margin-left: 100px
}

.acount {
  text-align: left
}

@keyframes loginFormAnime {
  0%{
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
}

@keyframes fadeOut {
  0%{
    opacity: 1;
  }

  100%{
    opacity: 0;
  }
}
</style>