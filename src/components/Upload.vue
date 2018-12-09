<template>
  <div class="list-container" ref="box">
    <UploadFile></UploadFile>
  </div>
</template>

<script>
  import axios from 'axios'
  import UploadFile from './UploadFile'

  export default {
    name: 'upload',
    components: {
      UploadFile
    },
    data() {
      return {}
    },
    computed: {},
    watch: {},
    methods: {},
    filters: {},
    mounted() {
    }
  }
</script>

<style scoped lang="scss">
  .list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 100%;
  }
  .upload {
    width: 80%;
    height: 90%;
  }
  .mu-grid-tile>img {
    cursor: pointer;
    width: 100%;
    height: auto;
  }
</style>
