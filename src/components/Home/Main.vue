<template>
  <div class="main_container">
    <div class="banner">
      <video src="../../assets/video/01_banner.mp4" muted autoplay loop></video>
    </div>
    <div class="earth_container">
      <h2 class="earth_title">地球 Earth</h2>
      <div class="item" @click="goDetail(0)">
        <h3 class="item_title">海洋</h3>
        <p class="deatil">约占地球表面积的71%</p>
        <img src="../../assets/images/banner/01_banner.jpg" alt="" />
      </div>
      <div class="item" @click="goDetail(1)">
        <h3 class="item_title">冰川</h3>
        <p class="deatil">两年融化一座珠穆朗玛峰的量</p>
        <img src="../../assets/images/banner/02_banner.jpg" alt="" />
      </div>
      <div class="item" @click="goDetail(2)">
        <h3 class="item_title">沙漠</h3>
        <p class="deatil">破坏土地平衡变成沙子</p>
        <img src="../../assets/images/banner/03_banner.jpg" alt="" />
      </div>
      <div class="item" @click="goDetail(3)">
        <h3 class="item_title">雨林</h3>
        <p class="deatil">每年减少约1700公顷</p>
        <img src="../../assets/images/banner/04_banner.jpg" alt="" />
      </div>
    </div>
    <div class="slogan">
      <h2 class="slogan_title">爱护环境</h2>
      <h2 class="slogan_title">你我做起</h2>
    </div>
    <div class="change">
      <div class="change_item">
        <div class="left">
          <h2 class="item_title">减少排放</h2>
          <p class="detail">气候的保护</p>
          <p class="detail">有利于人类的发展</p>
          <p class="detail">保护地球物种</p>
        </div>
        <div class="img_right">
          <img
            :class="{ active: active_01 }"
            src="../../assets/images/contrast/01_contrast_2.jpg"
          />
          <img
            :class="{ active: active_01 }"
            src="../../assets/images/contrast/01_contrast_1.jpg"
          />
        </div>
      </div>
      <div class="change_item">
        <div class="right">
          <h2 class="item_title">保护海洋</h2>
          <p class="detail">不要随手乱堆垃圾</p>
          <p class="detail">请热爱我们的故乡</p>
          <p class="detail">共建美好未来</p>
        </div>
        <div class="img_left">
          <img
            class="garbage"
            :class="{ active: active_02 }"
            src="../../assets/images/contrast/garbage/01_garbage.png"
            alt=""
          />
          <img
            class="garbage"
            :class="{ active: active_02 }"
            src="../../assets/images/contrast/garbage/02_garbage.png"
            alt=""
          />
          <img
            class="garbage"
            :class="{ active: active_02 }"
            src="../../assets/images/contrast/garbage/03_garbage.png"
            alt=""
          />
          <img
            class="garbage"
            :class="{ active: active_02 }"
            src="../../assets/images/contrast/garbage/04_garbage.png"
            alt=""
          />
          <img src="../../assets/images/contrast/02_contrast_1.jpg" />
        </div>
      </div>
      <div class="change_item">
        <div class="left">
          <h2 class="item_title">保护环境</h2>
          <p class="detail">和谐发展</p>
          <p class="detail">保护我们的下一代</p>
          <p class="detail">共爱地球一个家</p>
        </div>
        <div class="shelter" :class="{ active: active_03 }"></div>
        <div class="img_right">
          <img
            ref="rotate_node"
            :class="{ active: active_03 }"
            src="../../assets/images/contrast/03_contrast_1.png"
            alt=""
          />

          <el-tooltip
            class="item"
            effect="dark"
            content="点击可进入"
            placement="bottom"
          >
            <router-link
              to="/home/review"
              class="review"
              :class="{ active: active_03 }"
              >地球环境恶化</router-link
            >
          </el-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      active_01: false,
      active_02: false,
      active_03: false,
      changeNodeTop_01: "",
      changeNodeTop_02: "",
      changeNodeTop_03: "",
      scrollTop: "",
    };
  },
  methods: {
    goDetail: function (val) {
      const itemNode = document.getElementsByClassName("item")[val];
      const width = itemNode.offsetWidth;
      const height = itemNode.offsetHeight;
      const left = itemNode.offsetLeft;
      const top = itemNode.offsetTop - document.documentElement.scrollTop;
      this.$router.push({
        path: "/home/detail",
        query: { val, left, top, width, height },
      });
    },
  },
  mounted() {
    const _this = this;
    const changeNode = document.getElementsByClassName("change_item");
    window.timer = setInterval(() => {
      this.changeNodeTop_01 = changeNode[0].offsetTop * 0.9;
      this.changeNodeTop_02 = changeNode[1].offsetTop * 0.9;
      this.changeNodeTop_03 = changeNode[2].offsetTop * 0.9;
    }, 1000);

    if (
      _this.scrollTop >= _this.changeNodeTop_03 &&
      _this.scrollTop <= _this.changeNodeTop_03 * 1.25
    ) {
      _this.active_03 = true;
    } else {
      _this.active_03 = false;
    }

    window.onscroll = function () {
      _this.scrollTop = document.documentElement.scrollTop;

      if (
        _this.scrollTop >= _this.changeNodeTop_01 &&
        _this.scrollTop <= _this.changeNodeTop_01 * 1.25
      ) {
        _this.active_01 = true;
      } else {
        _this.active_01 = false;
      }

      if (
        _this.scrollTop >= _this.changeNodeTop_02 &&
        _this.scrollTop <= _this.changeNodeTop_02 * 1.3
      ) {
        _this.active_02 = true;
      } else {
        _this.active_02 = false;
      }

      if (
        _this.scrollTop >= _this.changeNodeTop_03 &&
        _this.scrollTop <= _this.changeNodeTop_03 * 1.25
      ) {
        _this.active_03 = true;
      } else {
        _this.active_03 = false;
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
  transform: translateY();

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
      // animation: move 0.7s;

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
        transform: scale(1);
        transition: 0.7s;
      }
    }
  }
}
@keyframes move {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
@media screen and (min-width: 821px) {
  .earth_container .item:hover img {
    transform: scale(1.2);
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
  height: 20rem;
  float: left;
  margin-top: 1rem;
  background-image: url("../../assets/images/banner/05_banner.jpg");
  background-size: cover;
  position: relative;

  .slogan_title {
    position: absolute;
    font-size: 2.5rem;
    transition: 0.5s;
    color: white;
    &:nth-of-type(1) {
      top: 6rem;
      left: 38rem;
    }
    &:nth-of-type(2) {
      top: 10rem;
      left: 44rem;
    }
  }
}

.change {
  float: left;
  width: 100%;
  height: 138rem;
  padding-top: 1rem;
  background-color: rgb(0, 0, 0);

  .change_item {
    width: 78rem;
    height: 30rem;
    margin: 11rem auto 0;
    color: white;
    position: relative;

    &:nth-of-type(2) {
      margin-bottom: 10rem;
    }
    &:nth-of-type(3) {
      transition: 0.5s;
      height: 34rem;
      padding-bottom: 3rem;
      .img_right {
        top: -4rem;
        width: 40rem;
        height: 40rem;
        img {
          transition: 3s;
          width: 100%;
          height: 100%;
          &.active {
            transform: rotate(180deg);
            visibility: visible;
          }
        }
        .review {
          display: block;
          font-size: 1.5rem;
          color: white;
          border-radius: 0.1rem;
          position: absolute;
          left: 50%;
          top: 60%;
          text-decoration: none;
          text-align: center;
          transform: translate(-50%, -50%);
          z-index: 9999;
          opacity: 0;
          visibility: hidden;
          transition: 0.5s;
          &.active {
            opacity: 1;
            visibility: inherit;
          }
          &:hover {
            color: #ffa300;
          }
        }
      }
      .shelter {
        position: absolute;
        width: 45rem;
        height: 21rem;
        right: 0;
        z-index: 100;
        background: rgb(0, 0, 0);
        bottom: 0;
        transition: 0.5s;
        transition-delay: 2s;
        opacity: 0.7;
        &.active {
          opacity: 1;
        }
      }
    }
    img {
      height: 27rem;
      transition: 1s;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 0.2rem;

      &:nth-of-type(1) {
        opacity: 1;
        &.active {
          visibility: hidden;
        }
      }
      &:nth-of-type(2) {
        opacity: 0;
        &.active {
          opacity: 1;
          z-index: 10;
          animation: zoom 0.8s;
        }
      }
    }

    /*  */
    .left {
      position: absolute;
      left: 1rem;
      top: 1rem;
    }
    .right {
      position: absolute;
      right: 1rem;
      top: 1rem;
    }
    /*  */
    .item_title {
      font-size: 3rem;
      transition: 0.5s;
    }
    .detail {
      transition: 0.5s;
      font-size: 1.8rem;
      margin-top: 2rem;
      margin-left: 6rem;
    }
    /*  */
    .img_right {
      position: absolute;
      width: 43rem;
      height: 27rem;
      right: 0;
    }
    .img_left {
      position: absolute;
      width: 43rem;
      height: 27rem;
      left: 0;
      overflow: hidden;

      .garbage {
        height: 5rem;
        position: absolute;
        z-index: 9999;

        &:nth-of-type(1) {
          top: 18rem;
          left: 3rem;
          &.active {
            left: -20rem;
          }
        }
        &:nth-of-type(2) {
          opacity: 1;
          top: 20rem;
          left: 11rem;
          &.active {
            left: -20rem;
          }
        }
        &:nth-of-type(3) {
          top: 18rem;
          left: 25rem;
          &.active {
            left: 50rem;
          }
        }
        &:nth-of-type(4) {
          top: 20rem;
          left: 34rem;
          &.active {
            left: 50rem;
          }
        }
      }
    }
    /*  */
  }
}
@keyframes zoom {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.07);
  }
  100% {
    transform: scale(1);
  }
}
</style>