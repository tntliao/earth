<template>
  <div class="review_container">
    <div class="review_content">
      <div class="page">
        <div class="item">
          <div class="p_item_left">
            <img src="../assets/images/review/01_review.png" alt="" />
          </div>
          <div class="p_item_right">
            <h2>我是地球</h2>
            <p>
              已经不停歇地转到45亿多年,习惯我的富饶和慷慨，切忽视了我的脆弱,人类的繁衍生息和不断发展，让我出现的问题：
            </p>
          </div>
        </div>
        <div class="item" :class="{ active: item_02_isActive }">
          <div class="p_item_left">
            <video
              class="videoNode"
              src="../assets/video/02_review.mp4"
              muted
              autoplay
              loop
            ></video>
          </div>
          <div class="p_item_right">
            <h2>室温气体汇集</h2>
          </div>
        </div>
        <div class="item" :class="{ active: item_03_isActive }">
          <div class="p_item_left">
            <video
              class="videoNode"
              src="../assets/video/03_review.mp4"
              muted
              autoplay
              loop
            ></video>
          </div>
          <div class="p_item_right">
            <h2>全球变暖</h2>
          </div>
        </div>
        <div class="item" :class="{ active: item_04_isActive }">
          <div class="p_item_left">
            <video
              class="videoNode"
              src="../assets/video/05_review.mp4"
              muted
              autoplay
              loop
            ></video>
          </div>
          <div class="p_item_right">
            <h2>气候异常</h2>
          </div>
        </div>
        <div class="item" :class="{ active: item_05_isActive }">
          <div class="p_item_left">
            <video
              class="videoNode"
              src="../assets/video/04_review.mp4"
              muted
              autoplay
              loop
            ></video>
          </div>
          <div class="p_item_right">
            <h2>冰川融化</h2>
          </div>
        </div>
        <div
          class="item"
          :class="{ active: item_06_isActive }"
          @click="earth_day"
        >
          <img
            class="item_img_node"
            src="../assets/images/review/earth_day.jpg"
            :class="{ active: item_06_isActive }"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Review",
  data() {
    return {
      item_02_isActive: false,
      item_03_isActive: false,
      item_04_isActive: false,
      item_05_isActive: false,
      item_06_isActive: false,
      item_03_left: "",
      item_04_left: "",
      item_05_left: "",
      item_06_left: "",
      scrollLeft: "",
    };
  },
  mounted() {
    let _this = this;
    window.review_content = document.querySelector(".review_content");
    window.itemNode = document.querySelectorAll(".item");
    setTimeout(() => {
      this.item_02_isActive = true;
    }, 700);
    setInterval(() => {
      this.item_03_left = window.itemNode[1].offsetLeft * 0.8;
      this.item_04_left = window.itemNode[2].offsetLeft * 0.8;
      this.item_05_left = window.itemNode[3].offsetLeft * 0.8;
      this.item_06_left = window.itemNode[4].offsetLeft * 0.8;
    }, 1000);
    window.node = document.querySelector(".review_content");
    window.wheelFun = function (event) {
      window.node.scrollLeft += event.deltaY + 85;
    };
    window.node.addEventListener("wheel", window.wheelFun);

    window.scrollFun = function () {
      _this.scrollLeft = window.review_content.scrollLeft;
      if (_this.scrollLeft > _this.item_03_left) {
        _this.item_03_isActive = true;
      }
      if (_this.scrollLeft > _this.item_04_left) {
        _this.item_04_isActive = true;
      }
      if (_this.scrollLeft > _this.item_05_left) {
        _this.item_05_isActive = true;
      }
      if (_this.scrollLeft > _this.item_06_left) {
        _this.item_06_isActive = true;
      }
    };
    window.review_content.addEventListener("scroll", window.scrollFun);
  },
  methods: {
    earth_day: function () {
      let item_06 = window.itemNode[5];
      let item_img_node = document.getElementsByClassName("item_img_node")[0];
      let width = item_img_node.offsetWidth;
      let height = item_img_node.offsetHeight;
      let left =
        item_img_node.offsetLeft + item_06.offsetLeft - window.node.scrollLeft;
      let top = item_img_node.offsetTop + item_06.offsetTop;

      this.$router.push({
        path: "/home/earth_day",
        query: { left, top, width, height },
      });
    },
  },
  deactivated() {
    window.node.removeEventListener("wheel", window.wheelFun);
    window.node.removeEventListener("scroll", window.wheelFun);
  },
};
</script>

<style lang="less" scoped>
.review_container {
  height: 100vh;
  background: rgb(0, 0, 0);
  overflow-y: hidden;
  .review_content {
    overflow-x: scroll;
    display: flex;
    .page {
      height: 100vh;
      padding: 8rem 10rem;
      box-sizing: border-box;
      flex-shrink: 0;
      display: flex;
      .item {
        width: 65rem;
        height: 100%;
        flex-shrink: 0;
        margin-right: 6rem;
        display: flex;
        flex-direction: row;
        transition: 2s;
        justify-content: space-around;
        align-items: center;
        position: relative;
        transform: translateX(40rem);
        &.active {
          transform: translateX(0);
        }
        .p_item_left {
          width: 30rem;
          height: 100%;
          position: relative;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 100%;
            transition: 0.7s;
          }
        }

        .p_item_right {
          width: 35rem;
          height: 100%;
          padding: 4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          box-sizing: border-box;
          h2 {
            font-size: 2rem;
            color: white;
          }
          p {
            font-size: 1.2rem;
            line-height: 2;
            color: white;
            text-indent: 2rem;
          }
        }
        &:nth-of-type(1) {
          transform: none;
          animation: review 1s;
          .p_item_left {
            width: 28rem;
            img {
              width: 100%;
              position: absolute;
              top: 50%;
              margin-top: -14rem;
              animation: imgRotate 60s linear infinite;
              animation-delay: 1.2s;
            }
          }
        }
        &:nth-of-type(2),
        &:nth-of-type(3),
        &:nth-of-type(4),
        &:nth-of-type(5) {
          .p_item_left {
            width: 40rem;
            .videoNode {
              border-radius: 0.2rem;
              transition: 0.5s;
              width: 100%;
            }
          }
          .p_item_right {
            width: 25rem;
            h2 {
              margin-left: 2rem;
            }
          }
        }
        &:nth-of-type(6) {
          width: 40rem;
          img {
            border-radius: 0.2rem;
            transition: 0.5s;
            width: 100%;
            &.active {
              animation: earth_day 3s infinite;
            }
          }
          cursor: pointer;
        }
      }
    }
  }
}
@keyframes review {
  0% {
    transform: translateX(-300px);
  }
  100% {
    transform: translateX(0px);
  }
}
@keyframes imgRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes earth_day {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.03);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>