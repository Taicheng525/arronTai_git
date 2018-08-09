<template>
  <div class="container">
    <h1>Reigster Form</h1>
    <div class="row">

      <form class="col s12" @submit.prevent="register">
        <div class="row">
          <div class="input-field col s12">
            <input id="user_name" v-model="user_name" type="text" class="validate">
            <label for="user_name">User Name</label>
          </div>
        </div>
        
        <div class="row">
          <div class="input-field col s12">
            <input id="password" v-model="password" type="password" class="validate">
            <label for="password">Password</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input id="re_password" v-model="re_password" type="password" class="validate">
            <label for="re_password">re-Password</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input id="user_email" v-model="user_email" type="email" class="validate">
            <label for="user_email">Email</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <textarea id="description" v-model="description" class="materialize-textarea"></textarea>
            <label for="description">Description</label>
          </div>
        </div>
         
        <!-- <div class="file-field input-field">
          <div class="btn">
            <span>File</span>
            <input type="file">
          </div>
          <div class="file-path-wrapper">
            <input v-model="user_avatar" class="file-path validate" type="text">
          </div>
        </div> -->
<div class="row">
        <vue-dropzone class="col s3" id="drop1" :options="dropOptions" style="height:150px"></vue-dropzone>
</div>
        <button class="btn waves-effect waves-light large" type="submit" >Submit
          <i class="material-icons right">send</i>
        </button>
        
        <router-link :to="{name:'Home'}" class="btn waves-effect waves-light blue right large"  >Back
          <i class="material-icons right">send</i>
        </router-link>


      </form>

    </div>
  </div>
</template>

<script>
import vueDropzone from "vue2-dropzone";
export default {
  name: "Regist",
  components: { vueDropzone },
  data() {
    return {
      user_name: null,
      password: null,
      re_password: null,
      user_email: null,
      password: null,
      user_avatar: null,
      description: null,
      dropOptions: {
        url: "https://httpbin.org/post",
        maxFiles: 1,
        thumbnailWidth: 150, // px
        thumbnailHeight: 150,
        addRemoveLinks: true
      }
    };
  },
  methods: {
    register() {
      console.log({
        user_name: this.user_name,
        password: this.password,
        re_password: this.re_password,
        user_email: this.user_email,
        user_avatar: this.user_avatar,
        description: this.description
      });
    }
  }
};
</script>

<style>
</style>
