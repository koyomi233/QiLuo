<template>
  <!--Start Upload-->
  <div class="upload-container" ref="box">
    <Card></Card>
  </div>
  <!--END Upload-->
</template>

<script>
  import axios from 'axios'
  import Card from './Card'

  export default {
    name: 'upload',
    components: {
      Card
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
  .upload-container {
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
