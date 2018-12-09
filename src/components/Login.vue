<template>
  <!--背景图-->
  <div class = "note" :style = "note">

    <div class="login">
      <mu-container data-mu-loading-color="secondary" data-mu-loading-overlay-color="rgba(0, 0, 0, .7)" v-loading="loading2" class="demo-loading-wrap">
        <mu-button color="#4fc3f7" @click="fullscreen()">Sign Up</mu-button>
      </mu-container>
    </div>

    <!--login框，表单+tab标签页的组合-->
    <div class = "loginFrame">

      <!--表单组件放在外面，标签栏在里面-->
      <el-form class = "demo-ruleForm login-container">

        <!--tab标签-->
        <div class ="logo">
          <img src="../assets/damask.png" width="200" height=auto>
          <router-view/>
        </div>

        <div class = "intro">
          Create your own artboard
        </div>

        <div class = "form-control">
          <el-input id = "username" type = "text"  auto-complete = "off" placeholder = "E-mail address / Qiluo ID" class = "form-control" ></el-input>
          <el-input id = "pwd" type = "password" auto-complete = "off" placeholder = "Password" class = "form-control" ></el-input>
        </div>

        <br>

        <div align="center">
          <el-form-item style = "width:300px;">
            <el-button type = "primary" style = "width:300px; font-size: 15px; font-weight: bolder;" @click="handleLogin()">Login</el-button>
          </el-form-item>
        </div>

        <div class = "remFor">
          <a href ="" class = "forget">I forgot</a>
        </div>

      </el-form>
    </div>
  </div>

</template>

<script>
  import AccountService from '@/service/accountService'

  export default {
    name: 'login',
    time: 3000,
    close: true,
    successIcon: 'check_circle',      // 成功信息图标
    infoIcon: 'info',                 // 信息信息图标
    warningIcon: 'priority_high',     // 提醒信息图标
    errorIcon: 'warning',
    data() {
      return {
        note: {
          position:"absolute",
          top:"0px",
          left:"0px",
          width: "100%",
          height:"100%",
          backgroundImage: "url(" + require("../assets/login.jpg") + ")",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        },
        loginForm: {
          email: 'admin@wz.com',
          password: ''
        },
        loginRules: {
          email: [
            { required: true, trigger: 'blur' }
          ],
          password: [
            { required: true, trigger: 'blur' }
          ]
        },
        loading: false,
        showDialog: false,
        account: [],
        loading2: false
      }
    },
    created(){
      this.loadAccount();
    },
    methods: {
      loadAccount: function () {
        AccountService.fetchAllAccount()
          .then(response => {
            // JSON responses are automatically parsed.
            this.account = response.data;
            console.log(this.account)
          })
          .catch(error => {
            this.errors.push(error)
            console.log(error)
          })
      },
      handleLogin ()
      {
        const loading = this.$loading();
        setTimeout(() => {
          loading.close();
        }, 2000);
        var input1 = document.getElementById('username').value;
        var input2 = document.getElementById('pwd').value;
        var fine = false;
        this.account.forEach(function (pic) {
          if (pic.email === input1){
            var pwd = pic.password;
            if (pwd === input2){
              fine = true;
            }
          }
        });
        if (fine)
          this.$router.replace('/home');
        else
          this.$toast.message('Account or Password Error');
        // if(input1 == 'hanzhiwen' && input2 == '112358'){
        //   this.$router.replace('/home')
        // }else{
        //   this.$toast.message('Account or Password Error');
        // }
      },
      fullscreen ()
      {
        const loading = this.$loading();
        setTimeout(() => {
          loading.close();
        }, 2000);
        this.$router.replace('/signup');
      },
      keyupSubmit(){
        document.onkeydown = e =>{
          let _key = window.event.keyCode;
          if(_key === 13){
            this.handleLogin();
          }
        }
      }
    }
  }</script>

<style>

  @import url("//unpkg.com/muse-ui@3.0.1/dist/muse-ui.css");

  .login-container {

    -webkit-border-radius: 5px;
    border-radius: 15px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 110px auto;
    width: 370px;
    padding: 35px 35px 15px 35px;
    background: rgba(255,255,255,0.8)

  ;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;

  }
  label{
    width:70px;
    text-align:left;
  }

  .form-control{
    width:300px;
    flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    margin: 0 auto;
  }
  .remember{
    width:250px;
    text-align:left;
  }
  .forget{
    width:500px;
    text-align:right;
    font-size:14px;
    font-family:PingFang SC;
  }
  .remFor{
    margin-bottom: 10px;
    padding-bottom: 10px;
    text-align: right;
  }
  .intro{
    margin-bottom: 10px;
    padding-bottom: 10px;
    font-weight: initial;
    color: grey;
    text-align: center;
  }
  .logo{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 5px;
  }
  .login{
    margin-top: 20px;
    margin-left: 1150px;
  }

</style>

