<template>
  <div class="detail_container">
    <div class="left" :style="styObj">
      <img
        src="../assets/images/public/exit.png"
        alt=""
        @click="goBack"
        :class="{ hidden: isHidden }"
      />
      <img
        :src="detailInfo[val].imgurl"
        alt=""
        srcset=""
        :class="{ haha: isHaha }"
      />
      <h2 class="left_title" :class="{ hidden: isHidden }">
        {{ detailInfo[val].title }}
      </h2>
      <p class="left_detail" :class="{ hidden: isHidden }">
        {{ detailInfo[val].detail }}
      </p>
    </div>
    <div class="right" :class="{ active: isActive }">
      <h2 class="right_title">新闻</h2>
      <div
        class="item"
        v-for="(item, index) in detailData[val]"
        :key="item.id"
        @click="goNews(index, detailInfo[val].title)"
      >
        <div class="item_left">
          <img :src="item.imgurl" />
        </div>
        <div class="item_right">
          <h2>{{ item.title }}</h2>
          <div class="author">
            <div class="author_left">
              <img src="../assets/images/login/02_login_icon.png" alt="" />
              <p class="name">保护地球环境</p>
            </div>
            <p class="time">{{ item.time }}</p>
          </div>
        </div>
      </div>
      <p class="more" @click="getDetail" v-if="!isLoading">获取更多</p>
      <i class="el-icon-loading loading" v-else></i>
    </div>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import mixins from "../mixin";
export default {
  name: "Detail",
  data() {
    return {
      isActive: false,
      val: this.$route.query.val,
      isLoading: false,
      isHidden: false,
      isHaha: false,
      styObj: {
        width: this.$route.query.width + "px",
        height: this.$route.query.height + "px",
        left: this.$route.query.left + "px",
        top: this.$route.query.top + "px",
      },
      defaultStyle: {
        width: this.$route.query.width + "px",
        height: this.$route.query.height + "px",
        left: this.$route.query.left + "px",
        top: this.$route.query.top + "px",
      },
    };
  },
  mixins: [mixins],
  methods: {
    goBack: function () {
      this.isActive = false;
      this.isHidden = true;
      setTimeout(() => {
        this.styObj = this.defaultStyle;
        setTimeout(() => {
          this.$router.back();
        }, 500);
        setTimeout(() => {
          document.querySelector(".right").style.display = "none";
          setTimeout(() => {
            this.isHaha = true;
          }, 40);
        }, 10);
      }, 500);
    },
    goNews: function (index, detailVal) {
      switch (detailVal) {
        case (detailVal = "海洋"):
          detailVal = 0;
          break;
        case (detailVal = "冰川"):
          detailVal = 1;
          break;
        case (detailVal = "沙漠"):
          detailVal = 2;
          break;
        case (detailVal = "雨林"):
          detailVal = 3;
          break;
      }

      if (index > 3) {
        if (index % 2 === 1) {
          index = 3;
        } else if (index % 2 === 0) {
          index = 2;
        }
      }

      let page = this.$router.resolve({
        path: "/home/detail/news",
        query: { index, detailVal },
      });

      window.open(page.href, "_blank");
    },
    getDetail: function () {
      this.isLoading = true;
      const nowData = this.detailData[this.val];
      let moreData = this.backupData[this.val];

      setTimeout(() => {
        this.isLoading = false;
        if (moreData.length > 0) {
          moreData = moreData.map((item) => {
            const newItem = {
              id: nanoid(),
              imgurl: item.imgurl,
              title: item.title,
              time: item.time,
            };
            return newItem;
          });

          const newData = [...nowData, ...moreData];
          this.detailData.splice(this.val, 1, newData);
        } else {
          this.$message({
            message: "当前数据已是最新",
            type: "success",
            center: true,
          });
        }
      }, 500);
    },
  },
  mounted() {
    if (window.navigator.onLine === true) {
      this.$message({
        message: "网络顺畅，可获得最佳体验",
        type: "success",
        center: true,
      });
    } else {
      this.$message({
        message: "网络异常，无法获得最佳体验",
        type: "warning",
        center: true,
      });
    }

    setTimeout(() => {
      this.styObj.width = 25 + "%";
      this.styObj.height = 96 + "vh";
      this.styObj.left = 0;
      this.styObj.top = 0;
      setTimeout(() => {
        this.isActive = true;
      }, 300);
    }, 10);
  },
};
</script>

<style lang="less" scoped>
.detail_container {
  box-sizing: border-box;
  position: relative;
  .left {
    min-width: 150px;
    position: fixed;
    background: rgb(255, 255, 255);
    overflow: hidden;
    transition: 0.5s ease-out;
    border-radius: 0.4rem;
    margin: 1rem;
    box-sizing: border-box;

    img {
      &:nth-of-type(1) {
        position: absolute;
        left: 2rem;
        top: 2rem;
        width: 1.7rem;
        cursor: pointer;
        &.hidden {
          visibility: hidden;
        }
      }
      &:nth-of-type(2) {
        margin: 5rem 2rem 0;
        width: 21rem;
        height: 15rem;
        background-size: cover;
        transition: 0.5s, opacity 0.7s;
        &.haha {
          width: 100%;
          height: 100%;
          margin: 0;
          opacity: 0;
        }
      }
    }
    .left_title {
      margin-top: 1rem;
      text-align: center;
      font-size: 2.5rem;
      transition: 0.5s;
      &.hidden {
        visibility: hidden;
      }
    }
    .left_detail {
      margin: 1rem 2rem 0;
      font-size: 1rem;
      &.hidden {
        visibility: hidden;
      }
    }
  }
  .right {
    position: absolute;
    width: 73%;
    height: 96vh;
    background: white;
    border-radius: 0.4rem;
    margin: 1rem;
    margin-right: 0;
    padding: 2rem;
    padding-top: 1rem;
    right: 0;
    transition: 0.5s;
    overflow-y: scroll;
    box-sizing: border-box;
    opacity: 0;
    transform: translateY(-200px);
    transition: 1.3s;
    &.active {
      opacity: 1;
      transform: translateY(0px);
    }
    .right_title {
      transition: 0.5s;
      font-size: 2rem;
      text-align: center;
      padding-bottom: 1rem;
    }
    .item {
      position: relative;
      height: 15rem;
      background: #f4f4f4;
      margin-bottom: 1rem;
      cursor: pointer;

      .item_left {
        position: absolute;
        left: 0;
        width: 25rem;
        height: 15rem;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          transition: 0.5s;
        }
      }
      .item_right {
        position: absolute;
        right: 0;
        width: 42.9rem;
        height: 15rem;
        padding: 3rem 3rem 2rem;
        box-sizing: border-box;
        transition: 0.5s;

        h2 {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          font-size: 1.5rem;
          transition: 0.5s;
        }
        .author {
          position: absolute;
          width: 38rem;
          height: 4rem;
          bottom: 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .author_left {
            width: 20rem;
            height: 4rem;
            display: flex;
            align-items: center;
            img {
              width: 2.5rem;
              height: 2.5rem;
              margin-right: 1rem;
              border-radius: 50%;
            }
          }
        }
      }

      &:hover {
        .item_left {
          img {
            transform: scale(1.1);
          }
        }
        .item_right h2 {
          color: #ffa300;
        }
      }
    }
    .more {
      position: absolute;
      line-height: 3rem;
      left: 50%;
      transform: translateX(-50%);
      cursor: pointer;
      font-size: 1rem;
    }

    .loading {
      position: absolute;
      line-height: 3rem;
      left: 49%;
      transform: translateX(-50%);
      cursor: pointer;
      font-size: 1.2rem;
    }
  }
}

@media screen and (max-width: 700px) {
  .detail_container {
    .left {
      opacity: 0;
      transform: translateX(-100%);
    }
    .right {
      width: 100%;
      .right_title {
        font-size: 5rem;
      }
      .item {
        height: 25rem;
        .item_left {
          width: 41rem;
          height: 25rem;
        }
        .item_right {
          width: 52.9rem;
          height: 25rem;
        }
      }
    }
  }
}
</style>