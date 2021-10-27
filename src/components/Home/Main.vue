<template>
  <div class="main_container">
    <div class="banner">
      <video src="../../assets/video/01_banner.mp4" muted autoplay loop></video>
    </div>
    <div class="earth_container">
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
    <div class="slogan"></div>
    <div class="change" id="changeNode">
      <h2 class="title">地球 Earth</h2>
      <div class="change_item">
        <h1>元素到顶部 {{ changeNodeTop }}</h1>
        <h1>滚动条高度 {{ scrollTop }}</h1>
        <h2 class="item_title">减少排放</h2>
        <p class="detail">气候的保护</p>
        <p class="detail">有利于人类的发展</p>
        <p class="detail">保护地球物种</p>
        <img src="../../assets/images/01_contrast_1.jpg" alt="" srcset="" />
        <img
          :class="{ active: active }"
          src="../../assets/images/01_contrast_2.jpg"
          alt=""
          srcset=""
        />
        <img src="../../assets/images/02_contrast_1.jpg" alt="" srcset="" />
        <img
          :class="{ active: active }"
          src="../../assets/images/02_contrast_2.jpg"
          alt=""
          srcset=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      active: false,
      changeNodeTop: "",
      scrollTop: "",
    };
  },
  mounted() {
    const _this = this;
    const changeNode = document.getElementById("changeNode");
    window.timer = setInterval(() => {
      this.changeNodeTop = changeNode.offsetTop;
    }, 1000);

    window.onscroll = function () {
      _this.scrollTop = document.documentElement.scrollTop;
      if (
        _this.scrollTop >= _this.changeNodeTop &&
        _this.scrollTop <= _this.changeNodeTop * 1.25
      ) {
        _this.active = true;
      } else {
        _this.active = false;
      }
    };
  },
  destroyed() {
    clearInterval(window.timer);
  },
};
</script>

<style lang='less' scoped>
.main_container {
  width: 100%;
  overflow-x: hidden;

  .banner {
    width: 100%;
    height: 34rem;
    border-bottom: 2px solid #ededed;
    box-sizing: content-box;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .earth_container {
    width: 78rem;
    margin: 1rem auto;

    .earth_title {
      text-align: center;
      font-size: 2.5rem;
      margin: 3rem 0;
    }

    .item {
      height: 26rem;
      transition: 0.5s;
      float: left;
      overflow: hidden;
      position: relative;
      cursor: pointer;
      border-radius: 0.2rem;

      .item_title {
        position: absolute;
        z-index: 9999;
        font-size: 2.5rem;
        color: aliceblue;
        left: 1rem;
        bottom: 1rem;
      }

      .deatil {
        position: absolute;
        z-index: 9999;
        left: 6.5rem;
        color: rgb(255, 255, 255);
        transition: 0.5s;
      }
      &:nth-of-type(1) {
        width: 49rem;
      }
      &:nth-of-type(2) {
        width: 27rem;
        margin-left: 2rem;
      }
      &:nth-of-type(3),
      &:nth-of-type(4) {
        width: 38rem;
        margin-top: 2rem;
      }
      &:nth-of-type(4) {
        margin-left: 2rem;
      }
      img {
        height: 100%;
        transform: scale(1.2);
        transition: 0.5s;
      }
    }
  }
}
@media screen and (min-width: 821px) {
  .earth_container .item:hover img {
    transform: scale(1);
  }
  .earth_container .item:hover .deatil {
    color: #ffa300;
  }
  .earth_container .item .deatil {
    bottom: 1.5rem;
    opacity: 1;
  }
}
@media screen and (max-width: 821px) {
  .earth_container .item .deatil {
    bottom: -7rem;
    opacity: 0;
  }
}
.slogan {
  width: 100%;
  height: 14rem;
  float: left;
  margin: 1rem 0;
  border: 1px solid black;
}

.change {
  float: left;
  width: 100%;
  padding-top: 1rem;
  height: 1600px;
  background-color: rgb(0, 0, 0);

  .title {
    text-align: center;
    font-size: 2.5rem;
    color: cornsilk;
    margin: 1rem 0 5rem;
  }
  .change_item {
    width: 78rem;
    height: 400px;
    margin: 0 auto;
    color: cornsilk;
    position: relative;

    .item_title {
      font-size: 3rem;
    }
    .detail {
      margin-top: 2rem;
      margin-left: 3rem;
    }
    img {
      position: absolute;
      height: 20rem;
      top: 0;
      transition: 1s;
      border-radius: 0.2rem;
      &:nth-of-type(1) {
        right: 10rem;
        opacity: 1;
      }
      &:nth-of-type(2) {
        right: 10rem;
        opacity: 0;
        &.active {
          opacity: 1;
          z-index: 10;
        }
      }
      &:nth-of-type(3) {
        right: 30rem;
        opacity: 1;
      }
      &:nth-of-type(4) {
        right: 30rem;
        opacity: 0;
        &.active {
          opacity: 1;
          z-index: 10;
        }
      }
    }
  }
}
</style>