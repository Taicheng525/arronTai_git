<template>
  <div class="container">
    <div class="row">
      <form class="col s12" @submit="login">

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
      this.axios
        .post("http://localhost:4000/login_auth", {
          user_email: this.user_email,
          password: this.password
        })
        .then(res => console.log(res));
    }
  }
};
</script>

<style>
</style>
