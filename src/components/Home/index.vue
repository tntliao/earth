<template>
  <div class="home_container">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Main from "./Main.vue";
export default {
  name: "Home",
  data() {
    return {
      isActive: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isActive = true;
    });
  },
  components: { Header, Main },
};
</script>

<style>
</style>