<template>
  <section class="container">
    <a id="menu" class="waves-effect waves-light btn btn-floating" @click="open" ><i class="material-icons">menu</i></a>

  <!-- Tap Target Structure -->
    <div class="tap-target" data-target="menu">
      <div class="tap-target-content">
        <h5>asdfasdfasfdasfds</h5>
        <p>asdfasdfasdfasdf</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Section",
  data() {
    return {};
  },
  mounted() {
    $(document).ready(function() {
      $(".tap-target").tapTarget();
    });
  },
  methods: {
    open() {
      $(".tap-target").tapTarget("open");
    }
  }
};
</script>

<style scoped>
section {
  min-height: 100vh;
}

a {
  margin-top: 300px;
}
</style>
