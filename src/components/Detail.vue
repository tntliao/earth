<template>
  <div class="detail_container">
    <div class="left" :style="styObj"></div>
    <!-- <div class="right"></div> -->
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      val: this.$route.query.val,
      styObj: {
        width: this.$route.query.width + "px",
        height: this.$route.query.height + "px",
        left: this.$route.query.left + "px",
        top: this.$route.query.top + "px",
      },
    };
  },
};
</script>

<style>
.detail_container {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  position: relative;
}
.left {
  position: absolute;
  background: antiquewhite;
}
</style>