<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
  import {
    mapState
  } from "vuex";

export default {
  name: 'App',
  data(){
    return{
    }
  },
  computed: {
    ...mapState({
      username: state => state.username,
      token: state => state.token
    }),
    activeRoute() {
      return this.$route.name
    }
  },
}
</script>

<style lang="scss">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  [v-cloak] {
    display: none;
  }
  /*注意，若html设置了高度，获取body的滚动条位置始终为0，所以仅为body设置为100vh*/
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    height: 100%;
    font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
  }
  #app {
    width: 100%;
    height: 100%;
  }
  footer {
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    color: #bac3f3;
    a {
      color: inherit;
    }
  }
  img {
    max-width: 100%;
  }
  a {
    cursor: pointer;
  }
</style>
