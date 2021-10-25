<template>
  <div class="header_node">
    <div class="title_box">
      <h2 class="head_title" :class="{ head_left: isActive }">保护</h2>
      <img src="../assets/images/02_login_icon.png" alt="" srcset="" />
      <h2 class="head_title" :class="{ head_right: isActive }">环境</h2>
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

<style scoped>
.header_node {
  width: 100vw;
  height: 4.5rem !important;
  border-bottom: 2px solid #ededed;
  background-color: white;
  position: fixed;
  z-index: 9999;
}
.title_box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.head_title {
  font-size: 2.5rem;
  transition: 1s;
}
.head_title:nth-of-type(1) {
  transform: translateX(-50px);
}
.head_title:nth-of-type(2) {
  transform: translateX(50px);
}
.title_box img {
  width: 4rem;
  height: 4rem;
  min-width: 25px;
  min-height: 25px;
  margin: 0.2rem 5rem;
  transform: 0.3s;
}
.head_title.head_left {
  transform: translateX(0);
}
.head_title.head_right {
  transform: translateX(0);
}
</style>