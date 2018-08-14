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
          </div><span class="red-text" v-if="password != re_password">Password are not same</span>
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
    
        <!-- <div class="row">
          <vue-dropzone class="col s3" id="drop1" :options="dropOptions" style="height:150px"></vue-dropzone>
        </div> -->

        <button class="btn waves-effect waves-light large" type="submit" :disabled='password != re_password'>Submit
          <i class="material-icons right">send</i>
        </button>
        
        <router-link :to="{name:'Home'}" class="btn waves-effect waves-light blue right large"  >Back
          <i class="material-icons right">send</i>
        </router-link>


      </form>
      {{u}}
    </div>
  </div>
</template>

<script>
import vueDropzone from "vue2-dropzone";
import { mapGetters, mapState, mapActions } from "vuex";
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
      description: null,
      dropOptions: {
        url: "https://httpbin.org/post",
        maxFiles: 1,
        thumbnailWidth: 150, // px
        thumbnailHeight: 150,
        addRemoveLinks: true,
        u: null
      }
    };
  },
  computed: {
    ...mapGetters("user", {
      u: "get_user"
    })
  },
  methods: {
    register() {
      // console.log({
      //   user_name: this.user_name,
      //   password: this.password,
      //   re_password: this.re_password,
      //   user_email: this.user_email,
      //   description: this.description
      // });
      this.$store.dispatch("user/regist_user", {
        user_name: this.user_name,
        password: this.password,
        user_email: this.user_email,
        description: this.description
      });
    }
  }
};
</script>

<style>
</style>
