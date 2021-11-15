<template>
  <div class="review_container">
    <div class="review_content">
      <div class="page">
        <div class="item">
          <img src="../assets/images/review/01_review.png" alt="" />
          <h2>我已经不停歇地转动45亿多年</h2>
        </div>
        <div class="item">
          <div class="r_item_imgNode">
            <img src="../assets/images/review/02_review.png" alt="" />
            <img src="../assets/images/review/02_review_02.png" alt="" />
          </div>
          <h2>室内气体汇集</h2>
        </div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Review",
  mounted() {
    window.node = document.querySelector(".review_content");
    window.wheelFun = function (event) {
      window.node.scrollLeft += event.deltaY;
    };
    window.node.addEventListener("wheel", window.wheelFun);
  },
  deactivated() {
    window.node.removeEventListener("wheel", window.wheelFun);
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
      padding: 8rem 8rem;
      box-sizing: border-box;
      flex-shrink: 0;
      display: flex;
      animation: review 1s;
      .item {
        width: 35rem;
        height: 100%;
        flex-shrink: 0;
        margin-right: 6rem;
        padding-bottom: 2rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        img {
          width: 28rem;
        }
        &:nth-of-type(1) {
          img {
            transition: 0.7s;
            animation: imgRotate 60s infinite linear;
          }
        }
        &:nth-of-type(2) {
          .r_item_imgNode {
            width: 33rem;
            position: relative;
            img {
              top: 0;
              width: 100%;
              position: absolute;
              &:nth-of-type(1) {
                animation: img_01 3s infinite;
                animation-direction: alternate;
              }
              &:nth-of-type(2) {
                animation: img_02 3s infinite;
                animation-direction: alternate;
              }
            }
          }
        }
        h2 {
          font-size: 2rem;
          color: white;
        }
      }
    }
  }
}
@keyframes review {
  0% {
    transform: translateX(300px);
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
  100% {
    opacity: 1;
  }
}

@keyframes img_02 {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>