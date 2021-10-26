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
          <p class="deatil">约占地球表面积的71%</p>
          <img src="../assets/images/01_banner.png" alt="" />
        </div>
        <div class="item">
          <h3 class="item_title">冰川</h3>
          <p class="deatil">两年融化一座珠穆朗玛峰的量</p>
          <img src="../assets/images/02_banner.png" alt="" />
        </div>
        <div class="item">
          <h3 class="item_title">沙漠</h3>
          <p class="deatil">破坏土地平衡变成沙子</p>
          <img src="../assets/images/03_banner.png" alt="" />
        </div>
        <div class="item">
          <h3 class="item_title">雨林</h3>
          <p class="deatil">每年减少约1700公顷</p>
          <img src="../assets/images/04_banner.png" alt="" />
        </div>
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
  cursor: pointer;
}
.earth .item .item_title {
  position: absolute;
  z-index: 9999;
  font-size: 2.5rem;
  color: aliceblue;
  left: 1rem;
  bottom: 1rem;
}
.earth .item .deatil {
  position: absolute;
  z-index: 9999;
  left: 6.5rem;
  bottom: -4rem;
  color: rgb(255, 255, 255);
  transition: 0.5s;
}
.earth .item:nth-of-type(2) .deatil {
  bottom: -7rem;
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
.earth .item img {
  height: 100%;
  transform: scale(1.2);
  transition: 0.5s;
}

@media screen and (min-width: 821px) {
  .earth .item:hover img {
    transform: scale(1);
  }
  .earth .item:hover .deatil {
    transform: translateY(-5.5rem);
  }
  .earth .item:nth-of-type(2):hover .deatil {
    transform: translateY(-8.5rem);
  }
}
</style>