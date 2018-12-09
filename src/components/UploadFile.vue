<template>
  <section class="wrap1">
    <el-upload
      class="upload-demo"
      drag
      action=""
      :file-list="fileList"
      :on-error="uploadError"
      :headers="uploadHeaders"
      show-file-list>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">Drag and drop files here, or<em> Click to upload</em></div>
      <div class="el-upload__tip" slot="tip">jpg/png only</div>
    </el-upload>

    <br/>

    <mu-container>
      <mu-text-field v-model="value4" label="File name" label-float></mu-text-field><br/>
      <mu-text-field v-model="value1" label="Name" label-float :max-length="20"></mu-text-field><br/>
      <mu-text-field v-model="value2" label="Title" label-float :max-length="50"></mu-text-field><br/>
      <mu-text-field v-model="value3" label="Content" label-float multi-line :rows="3" :max-length="300"></mu-text-field><br/>
      <mu-button color="#8c9eff" @click="submitPicture">
        Collect!
        <mu-icon right value="send"></mu-icon>
      </mu-button>
    </mu-container>

  </section>
</template>

<script>
  import axios from "axios";
  import PictureService from '@/service/pictureService';

  export default {
    data() {
      return {
        uploadHeaders:{
          "X-LC-Id": 'SweekfGYbKJzTDTi03v9zVqT-gzGzoHsz',
          "X-LC-Key": 'nRtOhSBFvooOAPHEcdJPez41',
          "Content-Type": "Content-Type: image/gif",
          'Access-Control-Allow-Origin': '*',
        },
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        fileList: [],
        pic: ''
      };
    },
    created() {

    },
    computed: {},
    methods: {
      handleChange(file) {
        this.pic = file.name;
      },
      uploadError (response, file, fileList) {
        console.log(response)
      },
      submitPicture: function () {
        var picture = {"comment": [""],
          "name": this.value1,
          "contentTitle": this.value2,
          "content": this.value3,
          "url": "../../static/resources/" + this.value4,
          "userid": null,
          "__v": 0};
        if (this.value4 == ''){
          this.$alert('Your file name is empty!', 'Alert', {
            okLabel: 'OK'
          })
        } else {
          PictureService.postPicture(picture)
            .then(response => {
              console.log(response);
              this.$alert('You have successfully collected！', 'INFO', {
                okLabel: 'OK'
              }).then(() => {
                this.$toast.message('Go check your homepage!');
              });
            })
            .catch(error => {
              this.errors.push(error)
              console.log(error)
            });
        }
      }
    }
  };
</script>

<style lang="scss">
  .wrap1 {
    width: 80%;
    text-align: center;
  }

</style>
