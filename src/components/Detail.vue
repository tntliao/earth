<template>
  <div class="detail_container">
    <div class="left" :style="styObj"></div>
    <div class="right_top" :class="{ active: isActive }"></div>
    <div class="right_bottom" :class="{ active: isActive }"></div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      isActive: false,
      val: this.$route.query.val,
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
      this.styObj.width = 20 + "rem";
      this.styObj.height = 100 + "vh";
      this.styObj.left = 0;
      this.styObj.top = 0;
    }, 10);
    setTimeout(() => {
      this.isActive = true;
    }, 300);
  },
};
</script>

<style>
.detail_container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.left {
  min-width: 150px;
  position: absolute;
  background: antiquewhite;
  transition: 0.5s cubic-bezier(0.42, 0, 1, 1);
}
.right_top {
  position: absolute;
  right: 0;
  top: 0;
  width: 80rem;
  height: 25%;
  background: rgba(255, 0, 0, 0.459);
  opacity: 0;
  transform: translateY(-200px);
  transition: 1s;
}
.right_top.active {
  opacity: 1;
  transform: translateY(0px);
}
.right_bottom {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 80rem;
  height: 75%;
  background: rgb(77, 170, 207);
  opacity: 0;
  transform: translateY(300px);
  transition: 1s;
}
.right_bottom.active {
  opacity: 1;
  transform: translateY(0px);
}

@media screen and (max-width: 700px) {
  .left {
    opacity: 0;
    visibility: hidden;
  }
  .right_bottom,
  .right_top {
    width: 100%;
  }
}
</style>