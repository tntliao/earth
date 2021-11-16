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
              我已经不停歇地转到45亿多年了,就习惯我的富饶和慷慨，切忽视了我的脆弱,人类的繁衍生息和不断发展，人们将地球渐渐变得残缺不堪，而地球也渐渐不再象当初那样充满活力
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
            <h2>减少室温气体</h2>
            <p>
              森林 草原 湿地 海洋 土壤 冻土 岩溶
              是二氧化碳的吸收器和贮存库，保护它们就是保护你们自己
            </p>
          </div>
        </div>
        <div class="item" :class="{ active: item_03_isActive }">
          <div class="p_item_left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            expedita, soluta nesciunt delectus quo perspiciatis, dolorem ea
            consectetur natus iusto aliquam consequatur deserunt? Harum, ad
            illum quisquam reiciendis soluta veritatis!
          </div>
          <div class="p_item_right">
            <p>{{ item_03_left }}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste
              sapiente exercitationem optio amet. Voluptates cumque cum deleniti
              veniam eum perspiciatis totam repellendus, tempora sint
              accusantium officiis dignissimos quibusdam necessitatibus.
            </p>
          </div>
        </div>
        <div class="item" :class="{ active: item_04_isActive }">
          <div class="p_item_left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            expedita, soluta nesciunt delectus quo perspiciatis, dolorem ea
            consectetur natus iusto aliquam consequatur deserunt? Harum, ad
            illum quisquam reiciendis soluta veritatis!
          </div>
          <div class="p_item_right">
            <p>{{ item_04_left }}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste
              sapiente exercitationem optio amet. Voluptates cumque cum deleniti
              veniam eum perspiciatis totam repellendus, tempora sint
              accusantium officiis dignissimos quibusdam necessitatibus.
            </p>
          </div>
        </div>
        <div class="item" :class="{ active: item_05_isActive }">
          <div class="p_item_left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            expedita, soluta nesciunt delectus quo perspiciatis, dolorem ea
            consectetur natus iusto aliquam consequatur deserunt? Harum, ad
            illum quisquam reiciendis soluta veritatis!
          </div>
          <div class="p_item_right">
            <p>{{ item_05_left }}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste
              sapiente exercitationem optio amet. Voluptates cumque cum deleniti
              veniam eum perspiciatis totam repellendus, tempora sint
              accusantium officiis dignissimos quibusdam necessitatibus.
            </p>
          </div>
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
      item_03_left: "",
      item_04_left: "",
      item_05_left: "",
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
    }, 1000);
    window.node = document.querySelector(".review_content");
    window.wheelFun = function (event) {
      window.node.scrollLeft += event.deltaY;
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
    };
    window.review_content.addEventListener("scroll", window.scrollFun);
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
        border: 1px solid rgb(255, 255, 255);
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
        &:nth-of-type(2) {
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
          }
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
@keyframes img_01 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes img_02 {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>