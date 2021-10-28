<template>
  <div class="detail_container">
    <div class="left" :style="styObj">
      <img :src="detailInfo[val].imgurl" alt="" srcset="" />
      <h2 class="left_title">{{ detailInfo[val].title }}</h2>
      <p class="left_detail">{{ detailInfo[val].detail }}</p>
    </div>
    <div class="right_top" :class="{ active: isActive }"></div>
    <div class="right_bottom" :class="{ active: isActive }"></div>
  </div>
</template>

<script>
import banner1 from "../assets/images/01_banner.png";
import banner2 from "../assets/images/02_banner.png";
import banner3 from "../assets/images/03_banner.png";
import banner4 from "../assets/images/04_banner.png";
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
      detailInfo: [
        {
          imgurl: banner1,
          title: "海洋",
          detail: "约占地球表面积的71%",
        },
        {
          imgurl: banner2,
          title: "冰川",
          detail: "两年融化一座珠穆朗玛峰的量",
        },
        {
          imgurl: banner3,
          title: "沙漠",
          detail: "破坏土地平衡变成沙子",
        },
        {
          imgurl: banner4,
          title: "雨林",
          detail: "每年减少约1700公顷",
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.styObj.width = 25 + "rem";
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

<style lang="less">
.detail_container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  .left {
    min-width: 150px;
    position: absolute;
    background: antiquewhite;
    overflow: hidden;
    transition: 0.5s cubic-bezier(0.42, 0, 1, 1);
    img {
      margin: 2rem;
      width: 21rem;
      height: 13rem;
      background-size: cover;
      border-radius: 0.3rem;
      transition: 0.5s;
    }
    .left_title {
      text-align: center;
      font-size: 2.5rem;
      transition: 0.5s;
    }
    .left_detail {
      margin-top: 2rem;
      text-align: center;
      font-size: 1rem;
    }
  }

  .right_top {
    position: absolute;
    right: 0;
    top: 0;
    width: 75rem;
    height: 25%;
    background: rgba(255, 0, 0, 0.459);
    opacity: 0;
    transform: translateY(-200px);
    transition: 1s;
    &.active {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  .right_bottom {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 75rem;
    height: 75%;
    background: rgb(77, 170, 207);
    opacity: 0;
    transform: translateY(300px);
    transition: 1s;
    &.active {
      opacity: 1;
      transform: translateY(0px);
    }
  }
}

@media screen and (max-width: 700px) {
  .left {
    opacity: 0;
    transform: translateX(-100%);
  }
  .right_bottom,
  .right_top {
    width: 100% !important;
  }
}
</style>