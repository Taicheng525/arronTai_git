<template>
  <section class="parallax-container">
    <div class="row" id="three_ad">

      <div class="col s12 m2 offset-m2">
        <div class="card transparent white-text center-align" >
          <div class="card-content">
            <!-- <font-awesome-icon class="slow-spin" icon="cog" size="7x" spin/> -->
            <i class="material-icons slow-spin" style="font-size: 115px">camera</i>
            <span class="card-title">some titles</span>
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>

          <div class="card-action">
            <a href="#">Detail</a>
          </div>
        </div>
      </div>

      <div class="col s12 m2 offset-m1">
        <div class="card transparent white-text center-align" >
          <div class="card-content">
            <!-- <font-awesome-icon class="slow-spin" icon="cog" size="9x" spin/> -->
            <i class="material-icons" style="font-size: 115px">monetization_on</i>
            <span class="card-title">
              some titles
            </span>
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>

          <div class="card-action">
            <a href="#">Detail</a>
          </div>
        </div>
      </div>

      <div class="col s12 m2 offset-m1">
        <div class="card transparent white-text center-align" >
          <div class="card-content">
            <!-- <font-awesome-icon class="slow-spin" icon="cog" size="9x" spin/> -->
            <i class="material-icons" style="font-size: 115px">playlist_add_check</i>
            <span class="card-title">
              some titles
            </span>
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>

          <div class="card-action">
            <a href="#">Detail</a>
          </div>
        </div>
      </div>
    </div>

<!-- cpu img section -->
    <div class="row" >
      
      <div class="col s12 m6" id="left_section">
        <div class="slider">
          <ul class="slides">
            <li>
              <img class="responsive-img" src="../../assets/cpu7.jpg">
              <div class="caption center-align ver_bottom">
                <h3>This is our big Tagline!</h3>
                <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
            <li>
              <img class="responsive-img" src="../../assets/nv.jpg">
              <div class="caption left-align">
                <h3>Left Aligned Caption</h3>
                <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="col s12 m6 white-text" id="right_section" >
        <!-- <img class="responsive-img" src="../../assets/right.jpg" alt=""> -->
        <h3>It's about time...</h3>
        <br>
        <h4>Wake up your computer...</h4>
        
        <a class="waves-effect waves-red btn-large red accent-4 pulse" id="create_btn"><i class="material-icons right">polymer</i>Create</a>
      </div>
     </div> 

    
  </section>
</template>

<script>
export default {
  name: "Section",
  data() {
    return {
      selected: false
    };
  },
  mounted() {
    $(document).ready(function() {
      $(".tap-target").tapTarget();
      $(".slider").slider({ indicators: false, interval: 1800, height: 453 });
    });
  },
  methods: {
    open() {
      this.selected = !this.selected;
      $(".tap-target").tapTarget("open");
    }
  }
};
</script>

<style scoped>
section {
  min-height: 100vh;
  background: url(../../assets/back_img.png);
}

.slow-spin {
  -webkit-animation: fa-spin 6s infinite linear;
  animation: fa-spin 25s infinite linear;
}

.card .card-title {
  padding-top: 45px;
  padding-bottom: 20px;
}

#three_ad {
  min-height: 50vh;
}

#left_section {
  min-height: 100vh;
  padding: 0px;
}

.ver_bottom {
  padding-top: 12em;
}

#right_section {
  min-height: 100vh;
  background: url(../../assets/right.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  padding-left: 4em;
  padding-top: 1em;
}

#create_btn{
  margin: 5.5em 0px 0px 0px;
}
</style>
