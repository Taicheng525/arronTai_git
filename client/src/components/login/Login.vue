<template>
  <div class="container">
    <div class="row">
      <form class="col s12" @submit.prevent="login">

        <div class="row">
          <div class="input-field col s12">
            <input id="email" v-model="user_email" type="email" class="validate">
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="password" v-model="password" type="password" class="validate">
            <label for="password">Password</label>
          </div>
        </div>
        
        <button class="btn waves-effect waves-light" type="submit" >Submit
          <i class="material-icons right">send</i>
        </button>
        
        <router-link :to="{name:'Home'}" class="btn waves-effect waves-light blue right"  >Back
          <i class="material-icons right">send</i>
        </router-link>

      </form>

    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user_email: null,
      password: null
    };
  },
  methods: {
    login() {
      // console.log(this.user_email, this.password);
      this.axios
        .post("http://localhost:4000/login", {
          username: this.user_email,
          password: this.password
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(`vue side error: ${err}`));
    }
  }
};
</script>

<style>
</style>
