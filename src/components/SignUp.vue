<template>
  <!--背景图-->
  <div class = "note" :style = "note">

    <div class="signUp">
      <mu-container data-mu-loading-color="secondary" data-mu-loading-overlay-color="rgba(0, 0, 0, .7)" v-loading="loading2" class="demo-loading-wrap">
        <mu-button color="#4fc3f7" @click="fullscreen()">Login</mu-button>
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

        <div class = "intro">
          <div style="font-size: 25px; font-weight: bolder">Sign Up</div>
        </div>

        <div class = "form-control">
          <el-input id = "username"  auto-complete = "off" placeholder = "E-mail address / Qiluo ID" class = "form-control" ></el-input>
          <el-input id = "password" auto-complete = "off" placeholder = "Password" class = "form-control" ></el-input>
        </div>

        <br>

        <div align="center">
          <el-form-item style = "width:300px;">
            <el-button type = "primary" style = "width:300px; font-size: 15px; font-weight: bolder;" @click="signUpAccount">Sign Up Now</el-button>
          </el-form-item>
        </div>

        <a href="/github/login">
          <Icon type="github" style="fontSize: 20;"/>
        </a>

      </el-form>
    </div>
  </div>

</template>

<script>
  import AccountService from '../service/accountService'
  
  export default {
    name: 'login',
    data() {
      return {
        loading1: false,
        loading2: false,
        logining : false,
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
        account : {
          username:'',
          password:'',
        },
        rules: {
          username :[
            {required: true, message: '请输入账号',trigger: 'blur'},
            //{ validator: validaePass }
          ],
          password: [
            {required: true,message: '请输入密码', trigger: 'blur'},
            //{ validator: validaePass2 }
          ]
        },
        checked: false
      };
    },
    methods: {
      signUpAccount(){
        var input1 = document.getElementById('username').value;
        var input2 = document.getElementById('password').value;
        var account = {
          "introduction": "",
          "avatar": "",
          "name": input1,
          "password": input2,
          "email": input1
        };
        if (input1 === '' || input2 === ''){
          this.$alert('You must enter correct email or password!', 'Alert', {
            okLabel: 'OK'
          })
        }else{
          AccountService.creatAccount(account)
            .then(response => {
              console.log(response);
              this.$alert('You have successfully create an account！', 'INFO', {
                okLabel: 'OK'
              }).then(() => {
                this.$router.push('/')
              });
            })
            .catch(error => {
              this.errors.push(error)
              console.log(error)
            });
        }
      },
      loading ()
      {
        this.loading2 = true;
        setTimeout(() => {
          this.loading2 = false;
        }, 2000)
      },
      fullscreen ()
      {
        const loading = this.$loading();
        setTimeout(() => {
          loading.close();
        }, 2000);
        this.$router.replace('/');
      }
    }

  }</script>

<style>

  .login-container {

    -webkit-border-radius: 5px;
    border-radius: 15px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 20px auto;
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
  .signUp{
    margin-top: 20px;
    margin-left: 1150px;
  }

</style>

