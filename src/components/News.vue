<template>
  <div class="news_container"></div>
</template>

<script>
import mixin from "../mixin";
export default {
  name: "news",
  data() {
    return {
      index: this.$route.query.index,
      detailVal: this.$route.query.detailVal,
    };
  },
  mounted() {
    console.log(this.detailVal);

    /* if (this.val === "海洋") {
      console.log(this.wholeData[0][this.index]);
    } */
  },
  mixins: [mixin],
};
</script>

<style lang="less" scoped>
.news_container {
  margin: 0 auto;
  width: 70rem;
  transition: 0.5s;
  height: 1000px;
  background: rgb(255, 255, 255);
  animation: zoom 0.5s;
}

@keyframes zoom {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>