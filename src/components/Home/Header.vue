<template>
  <div class="header_node">
    <div class="title_box">
      <h2 class="head_title" :class="{ reset: isActive }">保护</h2>
      <img src="../../assets/images/02_login_icon.png" alt="" srcset="" />
      <h2 class="head_title" :class="{ reset: isActive }">环境</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
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
};
</script>

<style lang="less" scoped>
.header_node {
  height: 5.5rem !important;
  min-height: 50px;
  border-bottom: 2px solid #ededed;
  background-color: white;
  z-index: 9999;

  .title_box {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .head_title {
      font-size: 2.5rem;
      transition: 1s;
      &:nth-of-type(1) {
        transform: translateX(-50px);
      }
      &:nth-of-type(2) {
        transform: translateX(50px);
      }
      &.reset {
        transform: translateX(0);
      }
    }

    img {
      width: 5rem;
      height: 5rem;
      min-width: 35px;
      min-height: 35px;
      margin: 0.2rem 5rem;
      transition: 0.5s;
      &:hover {
        transform: rotateZ(180deg);
      }
    }
  }
}

</style>