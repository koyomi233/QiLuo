<template>
  <section class="wrap1">
    <div class="alert-demo-wrapper">
      <mu-alert color="#9fa8da">
        Homepage
      </mu-alert>
      <br/>
    </div>

    <mu-container>
      <mu-card style="width: 100%; max-width: 500px; margin: 0 auto;" v-for="index in pictures" :key="index.id">
        <mu-card-header title="Myron Avatar" sub-title="sub title">
          <mu-avatar slot="avatar">
            <img :src="index.url">
          </mu-avatar>
        </mu-card-header>
        <mu-card-media :title=index.name sub-title="Image Sub Title">
          <el-tooltip class="item" effect="dark" content="Click and See" placement="right-start">
            <img :src="index.url" @click="openPicture(index._id)">
          </el-tooltip>
        </mu-card-media>
        <mu-card-title :title="index.contentTitle" :sub-title=index.date></mu-card-title>
        <mu-card-text>
          {{index.content}}
        </mu-card-text>
        <mu-card-actions class="button-wrapper">
          <mu-button flat @click="editCard(index._id)">
            Edit
            <mu-icon right value="edit"></mu-icon>
          </mu-button>
          <mu-button flat @click="deleteCard(index._id)">
            Delete
            <mu-icon right value="delete"></mu-icon>
          </mu-button>
        </mu-card-actions>
        <hr />
      </mu-card>

      <mu-dialog :open.sync="openPic">
        <img :src="purl">
      </mu-dialog>

    </mu-container>
    <mu-container>
      <mu-dialog title="Edit Card" width="600" max-width="80%" :esc-press-close="false" :overlay-close="false" :open.sync="openEdit">
        <mu-text-field v-model="value1" label="Name" label-float :max-length="20"></mu-text-field><br/>
        <mu-text-field v-model="value2" label="Title" label-float :max-length="50"></mu-text-field><br/>
        <mu-text-field v-model="value3" label="Content" label-float multi-line :rows="3" :max-length="300"></mu-text-field><br/>
        <mu-button slot="actions" flat color="primary" @click="closeEditDialog">CANCEL</mu-button>
        <mu-button slot="actions" flat color="primary" @click="saveEditDialog">SAVE</mu-button>
      </mu-dialog>
    </mu-container>

  </section>
</template>

<script>
  import axios from "axios";
  import PictureService from '@/service/pictureService';

  export default {
    data() {
      return {
        value1: '',
        value2: '',
        value3: '',
        pid: '',
        purl: '',
        pictures: [],
        openPic: false,
        openEdit: false
      };
    },
    created() {
      this.loadCards();
    },
    computed: {},
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
      deleteCard: function(id){
        this.$confirm('Are you sure to delete？', 'Alert', {
          type: 'warning',
          okLabel: 'OK',
          cancelLabel: 'CANCEL'
        }).then(({ result }) => {
          if (result) {
            PictureService.deletePicture(id)
              .then(response => {
                // JSON responses are automatically parsed.
                this.message = response.data;
                console.log(this.message);
                this.loadCards();
                this.$toast.message('Successfully Deleted!');
              })
              .catch(error => {
                this.errors.push(error);
                console.log(error)
              })
          } else {
            this.$toast.message('Canceled');
          }
        });
      },
      editCard: function(id){
        var v1 = '';
        var v2 = '';
        var v3 = '';
        var pid = '';
        this.pictures.forEach(function (pic) {
          if (pic._id === id) {
            v1 = pic.name;
            v2 = pic.contentTitle;
            v3 = pic.content;
            pid = pic._id;
          }else{
            console.log("NO such picture");
          }
        });
        this.value1 = v1;
        this.value2 = v2;
        this.value3 = v3;
        this.pid = id;
        this.openEdit = true;
      },
      closeEditDialog: function () {
        this.openEdit = false;
      },
      saveEditDialog: function () {
        var info = {"name": this.value1,
          "contentTitle": this.value2,
          "content": this.value3};
        console.log('Before PUT ' + JSON.stringify(info, null, 5))
        PictureService.editPicture(this.pid, info)
          .then(response => {
            console.log(response);
            console.log('AFTER PUT ' + JSON.stringify(info, null, 5));
            this.openEdit = false;
            this.$toast.success('Edit Success!');
            this.loadCards();
          })
          .catch(error => {
            this.errors.push(error)
            console.log(error)
          })
      },
      openPicture: function (id) {
        var url = '';
        this.pictures.forEach(function (pic) {
          if (pic._id === id)
            url = pic.url;
        });
        this.purl = url;
        this.openPic = true;
      }
    }
  };
</script>

<style lang="scss">
  .wrap1 {
    width: 80%;
    text-align: center;
  }
  .mu-linear-progress {
    position: absolute;
    left: 0;
    top: 0;
  }
  .m-upload {
    position: relative;
    .dragcover {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
    .dragbox {
      width: 100%;
      height: 300px;
      background-color: #46529d;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin: 0 auto;
      .mu-icon-button {
        width: auto;
      }
      .mu-icon {
        font-size: 100px;
        color: #fff;
      }
      p {
        color: #fff;
      }
    }
    .dragbox.z-active {
      background-color: #fff;
      border: 1px dashed #666;
      p {
        color: #46529d;
      }
      .mu-icon {
        color: #46529d;
      }
    }
  }
  .file-wrap {
    position: relative;
    text-align: center;
    .file-button {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      opacity: 0;
    }
    .btn-select {
      margin: 20px 0;
      input {
        width: 100%;
      }
    }
    .url-upload {
      display: flex;
      align-items: center;
      flex: 1;
      .mu-text-field {
        top: 8px;
        flex: 1;
        text-align: left;
      }
    }
  }
  .card-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      padding: 0 10px;
      flex: 0 1 50%;
      margin-top: 10px;
    }
    .mu-card {
      .image {
        width: 100%;
        height: 500px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        cursor: pointer;
      }
      .toolbar {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
      }
      .mu-text-field,
      .mu-flat-button {
        vertical-align: middle;
      }
      .mu-text-field-content {
        position: relative;
        top: 8px;
      }
      .btn {
        color: #4b5c76;
      }
      .btn-copy {
        min-width: 54px;
      }
    }
    .mu-transition-row {
      margin-top: 16px;
      height: 100px;
    }
    .mu-transition-box {
      min-width: 200px;
      height: 100px;
      margin: 0 auto;
      border-radius: 4px;
      padding: 0 16px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .item {
      margin: 4px;
    }
  }
  .gridlist-inline-demo {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
  .button-wrapper {
    text-align: center;
    .mu-button{
      margin: 8px;
    }
  }
  .alert-demo-wrapper {
    width: 100%;
    > .mu-alert {
      margin-bottom: 16px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
