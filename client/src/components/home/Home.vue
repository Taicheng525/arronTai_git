<template>
  <div class="home_page">
    <Header id="header"/>
    <Section id="section"/>
    <VideoDisplay />
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import Section from "@/components/section/Section";
import VideoDisplay from "@/components/videoDisplay/VideoDisplay";

export default {
  name: "Home",
  components: { Header, Section, VideoDisplay },
  data() {
    return {};
  }
};
</script>

<style scoped>
/* #header {
  min-height: 100vh;
}

#section {
  min-height: 100vh;
} */
</style>
