<template>
  <el-container>
    <el-header class="header_node">
      <div class="title_box">
        <h2 class="head_title" :class="{ head_left: isActive }">保护</h2>
        <img src="../assets/images/02_login_icon.png" alt="" srcset="" />
        <h2 class="head_title" :class="{ head_right: isActive }">环境</h2>
      </div>
    </el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
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
};
</script>

<style>
.header_node {
  border-bottom: 2px solid #ededed;
}
.title_box {
  margin: 0 33rem;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.head_title {
  font-size: 2.5rem;
  transition: 0.9s;
}
.head_title:nth-of-type(1) {
  transform: translateX(-100px);
}
.head_title:nth-of-type(2) {
  transform: translateX(100px);
}
.title_box img {
  width: 4rem;
  height: 4rem;
  min-width: 25px;
  min-height: 25px;
  margin: 0.2rem 0;
}
.head_title.head_left {
  transform: translateX(0);
}
.head_title.head_right {
  transform: translateX(0);
}
</style>