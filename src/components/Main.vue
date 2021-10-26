<template>
  <div class="main_container">
    <div class="banner">
      <video src="../assets/video/01_banner.mp4" muted autoplay loop></video>
    </div>
    <div class="list_container">
      <div class="earth">
        <h2 class="earth_title">地球母亲</h2>
        <div class="item">
          <h3 class="item_title">海洋</h3>
          <img src="../assets/images/01_banner.jpg" alt="" />
        </div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {};
  },
};
</script>

<style scoped>
.main_container {
  width: 100%;
  overflow-x: hidden;
}
.banner {
  width: 100%;
  height: 34rem;
  border-bottom: 2px solid #ededed;
  box-sizing: content-box;
}
.banner video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.list_container {
  width: 80rem;
  margin: 0 auto;
  margin-top: 1rem;
  height: 1000px;
}
.earth_title {
  text-align: center;
  font-size: 2.5rem;
  margin: 3rem 0;
}
.earth .item {
  height: 26rem;
  transition: 0.5s;
  float: left;
  border: 2px solid #ededed;
  overflow: hidden;
  position: relative;
}

.earth .item .item_title {
  position: absolute;
  z-index: 9999;
  font-size: 2.5rem;
  color: aliceblue;
  left: 1rem;
  bottom: 1rem;
}
.earth .item:nth-of-type(1) {
  width: 49rem;
}
.earth .item:nth-of-type(2) {
  width: 27rem;
  margin-left: 2rem;
}

.earth .item:nth-of-type(3),
.earth .item:nth-of-type(4) {
  width: 38rem;
  margin-top: 2rem;
}
.earth .item:nth-of-type(4) {
  margin-left: 2rem;
}

.earth .item:nth-of-type(1) img {
  height: 100%;
  transform: scale(1.2);
  transition: 0.5s;
}

.earth .item:nth-of-type(1):hover img {
  transform: scale(1);
}
</style>