<template>
  <div class="log-layout">
    <el-container class="el-container" style="height: 100%">
      <el-header class="logheader" style=" height: 50px">
        <loginHeader/>
      </el-header>

      <el-main class="logMain" id="logMain">
        <div class="loginContainer">
          <!--  <vue-particles color="#fff" :particlesNumber='60' :moveSpeed='1.5' :lineOpacity='0.5' class="bg"></vue-particles>-->
          <div class="loginForm">
            <div class="formContainer">
              <div class="formWrapper">
                <img src="http://hub.hust.edu.cn/images/hustpass.png?randomId=1602773736916"
                     style="margin: 30px 0 80px;width: 300px;height: 80px;margin-bottom: 60px">
                <el-row :gutter="70">
                  <el-col :lg="6" :sm="10" class="aa">
                    <el-form class="el-form" :model="ruleForm" status-icon ref="ruleForm" label-width="100px">
                      <el-form-item style="margin-left: 0px" prop="pass">
                        <el-input prefix-icon="el-icon-user" placeholder="请输入用户名" v-model="ruleForm.username"
                                  autocomplete="off"></el-input>
                      </el-form-item>

                      <el-form-item prop="username">
                        <el-input prefix-icon="el-icon-unlock" placeholder="请输入密码" type="password"
                                  v-model="ruleForm.password" autocomplete="off"></el-input>
                      </el-form-item>
                      <!--<el-form-item label="年龄" prop="age">
                        <el-input v-model.number="ruleForm.age"></el-input>
                      </el-form-item>-->
                      <div class="buttonContainer">
                        <el-row>
                          <el-col :span='12'>
                            <el-button type="primary" @click="submitForm('ruleForm')"
                                       @keydown.enter="submitForm('ruleForm')"
                                       style="margin-bottom: 20px;font-size: 20px; margin-right:5px; width:95%" id="loginBtn">登录
                            </el-button>
                          </el-col>
                          <el-col :span='12'>
<!--                             <el-button @click="resetForm('ruleForm')" style="font-size: 20px;">重置
                            </el-button>-->
                            <el-button  style="font-size: 20px;margin-left:5px; width:95%">注册
                            </el-button>
                          </el-col>
                        </el-row>

                      </div>


                    </el-form>
                  </el-col>
                </el-row>
              </div>

            </div>
          </div>
        </div>
      </el-main>
    </el-container>

  </div>

</template>

<script>
import loginHeader from "@/pages/login/loginHeader";
import {login} from "@/assets/Utils/requestAPI";
import 'element-ui/lib/theme-chalk/display.css';

export default {
  name: "login",
  components:{
    loginHeader,
  },
  data() {
    return {
      ruleForm: {
        username: '',
        password: '',

      }
    }

  },
  mounted() {
    var dom2 = document.getElementsByClassName("el-form-item__content")
    console.log(dom2)
    for (let i = 0; i < dom2.length; ++i) {
      dom2[i].setAttribute("style", "margin-left:0px");
    }

    // <!--把window.onresize事件挂在到mounted函数上-->
    let fullHeight = document.documentElement.clientHeight;
    console.log("页面高度"+fullHeight);
    document.getElementById("logMain").style.height=fullHeight-51+"px"
    window.onresize = () => {
      return (() => {
        let fullHeight = document.documentElement.clientHeight;
        console.log("页面高度"+fullHeight);
        let obj=document.getElementById("logMain")
        obj.style.height=fullHeight-51+"px"
      })()
    };
  },
  methods: {
    submitForm(formName) {
      let that=this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login(that, this.ruleForm)
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
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
  justify-content: space-between;
  height: 80px;
  background-color: #545c64;
  color: #ffffff;
}

.logheader-left {

}

.logMain {
  padding: 100px;
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