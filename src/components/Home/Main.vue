<template>
  <div class="main_container">
    <div class="banner">
      <video src="../../assets/video/01_banner.mp4" muted autoplay loop></video>
    </div>
    <div class="list_container">
      <!--  -->
      <div class="earth">
        <h2 class="earth_title">地球 Earth</h2>
        <div class="item">
          <h3 class="item_title">海洋</h3>
          <p class="deatil">约占地球表面积的71%</p>
          <img src="../../assets/images/01_banner.png" alt="" />
        </div>
        <div class="item">
          <h3 class="item_title">冰川</h3>
          <p class="deatil">两年融化一座珠穆朗玛峰的量</p>
          <img src="../../assets/images/02_banner.png" alt="" />
        </div>
        <div class="item">
          <h3 class="item_title">沙漠</h3>
          <p class="deatil">破坏土地平衡变成沙子</p>
          <img src="../../assets/images/03_banner.png" alt="" />
        </div>
        <div class="item">
          <h3 class="item_title">雨林</h3>
          <p class="deatil">每年减少约1700公顷</p>
          <img src="../../assets/images/04_banner.png" alt="" />
        </div>
      </div>
    </div>
    <!--  -->
    <div class="slogan"></div>
    <!--  -->
    <div class="long_graph_container">
      <div class="long_graph">
        <div class="p_item1">
          <h2 class="p_title">减少排放</h2>
          <div class="p_detail">
            <p>有利于人类的发展</p>
            <p>地球气候的保护</p>
            <p>保护地球物种</p>
          </div>
          <img src="../../assets/images/01_long_graph.png" alt="" />
          <img src="../../assets/images/01_long_graph_end.png" alt="" />
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
  width: 78rem;
  margin: 1rem auto;
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
  /* border: 2px solid #ededed; */
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
  bottom: -10rem;
  opacity: 0;
  color: rgb(255, 255, 255);
  transition: 0.5s;
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
    color: #ffa300;
  }
  .earth .item .deatil {
    bottom: -7rem;
  }
}
@media screen and (min-width: 821px) {
  .earth .item .deatil {
    bottom: 1.5rem;
    opacity: 1;
  }
}

.slogan {
  width: 100%;
  height: 10rem;
  float: left;
  margin: 2rem 0;
  border: 1px solid black;
}
.long_graph_container {
  float: left;
  width: 100%;
  height: 1000px;
  background: rgb(0, 0, 0);
}
.long_graph {
  margin-left: 50%;
  padding-top: 2rem;
  /* height: 100%; */
  transform: translateX(-50%);
  width: 78rem;
}
.p_item1 {
  position: relative;
}
.p_title {
  float: left;
  margin-top: 2rem;
  color: #ededed;
  font-size: 2.5rem;
}
.p_item1 img {
  position: absolute;
  right: 0;
  width: 40rem;
  transition: 0.3s;
}
.p_item1 img:nth-of-type(1) {
  opacity: 1;
}
.p_item1 img:nth-of-type(2) {
  opacity: 0;
}
.p_detail {
  color: #ededed;
  font-size: 1.3rem;
}
</style>