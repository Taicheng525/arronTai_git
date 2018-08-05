<template>
  <div id="video" class="valign-wrapper">
    <!-- <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a> -->
    <a href="#modal1" class="modal-trigger" id="play_btn">
      <i class="large material-icons white-text">play_circle_outline</i>
    </a>
    <!-- Modal Structure -->
    <div id="modal1" class="modal">
      <i class="medium material-icons white-text right" style="cursor: pointer" id="close" @click="stop">close</i>
        <div class="video-container">
          
          <!-- <iframe id="yt_video" width="993" height="621" src="https://www.youtube.com/embed/Rnpd1G-SQqs?enablejsapi=1" frameborder="0" allow=" encrypted-media" allowfullscreen></iframe> -->
          <youtube ref="youtube"  :video-id="url" @stop="stop" @pause="pause"></youtube>
        </div>



      <!-- <div class="video-container">
        <iframe width="853" height="480" src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameborder="0" allowfullscreen></iframe>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoDisplay",
  data() {
    return {
      url: "Rnpd1G-SQqs"
    };
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    }
  },
  mounted() {
    const close_method = this.stop;

    $(".modal").modal({
      inDuration: 300,
      onCloseStart: function() {
        console.log("clse!!!!");
        close_method();
      }
    });
  },
  methods: {
    pause() {
      this.player.pauseVideo();
    },
    stop() {
      this.player.stopVideo();
      $(".modal").modal("close");
    }
  }
};
</script>

<style scoped>
#video {
  min-height: 100vh;
  background: url(../../assets/vido.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

#play_btn {
  margin: auto auto;
}

#modal_in {
  padding: 0;
}

#close {
  margin: 0;
}

.modal {
  background-color: black;
}
</style>
