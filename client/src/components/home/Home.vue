<template>
  <div class="home_page">
    <Header id="header"/>
    <Section id="section"/>
    <VideoDisplay />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import Section from "@/components/section/Section";
import VideoDisplay from "@/components/videoDisplay/VideoDisplay";
import Footer from "@/components/footer/Footer";

export default {
  name: "Home",
  components: { Header, Section, VideoDisplay, Footer },
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
