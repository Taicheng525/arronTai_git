<template>
  <div class="home_page">
    <Header />
    <Section />
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import Section from "@/components/section/Section";

export default {
  name: "Home",
  components: { Header, Section },
  data() {
    return {};
  }
};
</script>

<style>
</style>
