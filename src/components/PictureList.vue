<template>
  <section class="wrap2">

    <mu-container>
      <mu-row gutter>
        <!--<mu-col span="12" lg="4" sm="6">-->
          <!--<mu-auto-complete :data="fruits" label="提示输入内容" v-model="value1"></mu-auto-complete>-->
        <!--</mu-col>-->
        <!--<mu-col span="12" lg="4" sm="6">-->
          <!--<mu-auto-complete :data="fruits" label="最多显示五条搜索数据" :max-search-results="5" v-model="value2"></mu-auto-complete>-->
        <!--</mu-col>-->
        <mu-col span="12" lg="4" sm="6">
          <mu-auto-complete :data="picName" label="Search..." :max-search-results="5"  v-model="value3" open-on-focus  action-icon="search" @keyup.enter="findByName(value3)"></mu-auto-complete>
        </mu-col>
      </mu-row>
    </mu-container>

    <br>

    <mu-container>
      <mu-grid-list class="gridlist-inline-demo" :cols="4" style="flex-wrap: wrap">
        <mu-grid-tile v-for="tile, index in pictures" :key="index">
          <img  :src="tile.url" style="object-fit: cover">
          <span slot="title">{{tile.name}}</span>
          <span slot="subTitle">by <b>{{tile.name}}</b></span>
          <mu-button slot="action" icon>
            <mu-icon value="star_border"></mu-icon>
          </mu-button>
        </mu-grid-tile>
      </mu-grid-list>
    </mu-container>

  </section>
</template>

<script>
  import axios from "axios";
  import PictureService from '../service/pictureService.js';

  export default {
    data() {
      return {
        pictures: [],
        picName: [],
        value1: '',
        value2: '',
        value3: ''
      };
    },
    created() {
      this.loadCards();
    },
    watch: {
      pictures: function () {
        var _this = this;
        _this.$nextTick(function () {
          _this.loadNames();
        })
      }
    },
    computed: {},
    mounted() {
    },
    methods: {
      loadCards: function(){
        PictureService.fetchPictures()
          .then(response => {
            // JSON responses are automatically parsed.
            this.pictures = response.data;
            console.log(this.pictures);
          })
          .catch(error => {
            this.errors.push(error);
            console.log(error);
          })
      },
      loadNames: function () {
        var names = [];
        this.pictures.forEach(function (pic) {
          names.push(pic.name);
        });
        this.picName = names;
        console.log(this.picName);
      },
      findByName: function (name) {
        PictureService.fetchName(name)
          .then(response => {
            this.pictures = response.data;
          })
          .catch(error => {
            this.errors.push(error);
            console.log(error);
          })
      }
    }
  };
</script>

<style lang="scss">

  .wrap2 {
    width: 80%;
    text-align: center;
  }
  .gridlist-inline-demo {
    display: flex;
    flex-wrap: wrap;
    overflow-x: auto;
  }
  .img-box{
    object-fit: cover;
    z-index:-1;
  }

</style>
