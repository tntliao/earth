<template>
  <div>
    <div class="day_container">
      <div class="day_content" :style="styObj"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EarthDay",
  data() {
    return {
      styObj: {
        width: this.$route.query.width + "px",
        height: this.$route.query.height + "px",
        left: this.$route.query.left + "px",
        top: this.$route.query.top + "px",
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.styObj.width = 100 + "vw";
      this.styObj.height = 100 + "vh";
      this.styObj.left = 0;
      this.styObj.top = 0;
    }, 40);
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.day_container {
  position: relative;
  .day_content {
    position: absolute;
    transition: 0.7s;
    background: pink;
  }
}
</style>