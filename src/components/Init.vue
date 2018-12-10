<template>
  <div class="home">
    <div class="container">
      <div style="opacity: 0.9">
        <!--Start leftCol-->
        <div class="m-leftcol">
          <div class="menu">
            <mu-menu placement="top-start" open-on-hover>
              <mu-button id="muButton" color="primary" @click="goToList">Damask</mu-button>
              <mu-list slot="content">
                <mu-list-item id="list1" button @click="goToHome">
                  <mu-list-item-title>Home Page</mu-list-item-title>
                </mu-list-item>
                <mu-list-item id="list2" button>
                  <mu-list-item-title>Discover</mu-list-item-title>
                </mu-list-item>
                <mu-list-item id="list3" button>
                  <mu-list-item-title>Latest</mu-list-item-title>
                </mu-list-item>
                <mu-list-item id="list4" button @click="goToUpload">
                  <mu-list-item-title>Upload</mu-list-item-title>
                </mu-list-item>
              </mu-list>
            </mu-menu>
          </div>
        </div>
        <!--END leftcol-->
      </div>

      <div class="m-main" v-if=isList>
        <ListPage></ListPage>
      </div>
      <div class="m-main" v-if=isHome>
        <Homepage></Homepage>
      </div>
      <div class="m-main" v-if=isUpload>
        <Upload></Upload>
      </div>

    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import Vue from 'vue'
  import Vuex from 'vuex'
  import Homepage from "./Homepage.vue"
  import ListPage from "./ListPage.vue"
  import Upload from "./Upload.vue"

  Vue.use(Vuex)

  export default {
    name: "home",
    data() {
      return {
        isList: true,
        isHome: false,
        isUpload: false,
      };
    },
    components: {
      Homepage,
      ListPage,
      Upload
    },
    methods: {
      goToHome(){
        this.isHome =  true;
        this.isList = false;
        this.isUpload = false;
        const loading = this.$loading();
        setTimeout(() => {
          loading.close();
        }, 2000);
        this.$router.replace('/home');
      },
      goToList(){
        this.isList = true;
        this.isHome = false;
        this.isUpload = false;
        const loading = this.$loading();
        setTimeout(() => {
          loading.close();
        }, 2000);
        this.$router.replace('/home');
      },
      goToUpload(){
        this.isUpload = true;
        this.isHome = false;
        this.isList = false;
        const loading = this.$loading();
        setTimeout(() => {
          loading.close();
        }, 2000);
        this.$router.replace('/home');
      }
    },
    mounted() {
    }
  };
</script>

<style scoped lang="scss">
  // leftCol
  $clr-bg: #46529d;
  $clr-icon: #a5b8c8;
  .m-leftcol {
    position: fixed;
    float: left;
    width: 300px;
    height: 80%;
    height: 80vh;
    background-color: $clr-bg;
    .menu {
      box-sizing: border-box;
      padding: 40px 20px;
      color: $clr-icon;
      .avatar {
        display: block;
        height: 32px;
        line-height: 32px;
        float: right;
      }
    }
    &-mini {
      left: 100px;
    }
    .avatar {
      width: 40px;
      img {
        border-radius: 50%;
      }
    }
  }

  .home {
    box-sizing: border-box;
    padding: 20px;
    position: relative;
    width: 100%;
    min-height: 100%;
    background: url("../assets/login.jpg") no-repeat center center;
    background-size: cover;
    background-attachment: fixed;
  }

  .container {
    width: 100%;
    height: 100%;
  }

  // main
  .m-main {
    position: relative;
    margin-left: 300px;
    min-height: 95vh;
    background-color: #f1f4ff;
    opacity: 0.9;
    background-attachment: fixed;
    padding: 60px 0;
    &-full {
      left: 100px;
    }
  }

  .m-container{
    opacity: initial;
  }
</style>
