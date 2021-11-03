<template>
  <div class="detail_container">
    <div class="left" :style="styObj">
      <img src="../assets/images/public/exit.png" alt="" @click="goBack" />
      <img :src="detailInfo[val].imgurl" alt="" srcset="" />
      <h2 class="left_title">{{ detailInfo[val].title }}</h2>
      <p class="left_detail">{{ detailInfo[val].detail }}</p>
    </div>
    <div class="right" :class="{ active: isActive }">
      <h2 class="news">新闻</h2>
      <div class="news_list">
        <div class="item" v-for="item in detailData[val]" :key="item.id">
          <div class="news_left">
            <img :src="item.imgurl" alt="" />
          </div>
          <div class="news_right">
            <p>
              {{ item.detail }}
            </p>
            <a class="link" :href="item.link" target="_blank">原文链接</a>
          </div>
        </div>
        <p class="more" @click="getDetail" v-if="!isLoading">获取更多</p>
        <i class="el-icon-loading loading" v-else></i>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from "../mixin";
export default {
  name: "Detail",
  data() {
    return {
      isActive: false,
      val: this.$route.query.val,
      isLoading: false,
      styObj: {
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
      this.$router.back();
    },
    getDetail: function () {
      this.isLoading = true;
      const nowData = this.detailData[this.val];
      const moreData = this.backupData[this.val] || [];
      setTimeout(() => {
        this.isLoading = false;
        if (moreData.length > 0) {
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
    setTimeout(() => {
      this.styObj.width = 25 + "%";
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

<style lang="less" scoped>
.detail_container {
  box-sizing: border-box;
  position: relative;

  .left {
    min-width: 150px;
    position: fixed;
    background: #f9fcfd;
    overflow: hidden;
    transition: 0.5s;
    border-radius: 0.4rem;

    img {
      &:nth-of-type(1) {
        position: absolute;
        left: 2rem;
        top: 2rem;
        width: 1.7rem;
        cursor: pointer;
      }
      &:nth-of-type(2) {
        margin: 5rem 2rem 0;
        width: 21rem;
        height: 13rem;
        background-size: cover;
        border-radius: 0.2rem;
        transition: 0.5s;
      }
    }
    .left_title {
      margin-top: 1rem;
      text-align: center;
      font-size: 2.5rem;
      transition: 0.5s;
    }
    .left_detail {
      margin: 1rem 2rem 0;
      font-size: 1rem;
    }
  }

  .right {
    position: absolute;
    right: 0;
    width: 74%;
    min-height: 100vh;
    padding: 2rem;
    padding-bottom: 5.5rem;
    box-sizing: border-box;
    border-radius: 0.4rem;
    background: #f9fcfd;
    opacity: 0;
    transform: translateY(-200px);
    transition: 1.3s;
    &.active {
      opacity: 1;
      transform: translateY(0px);
    }
    .news {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 0.2rem;
    }
    .news_list {
      position: relative;
      .item {
        transition: 0.5s;
        height: 14rem;
        margin-bottom: 1rem;
        position: relative;

        .news_left {
          width: 23rem;
          height: 14rem;
          float: left;
          img {
            width: 100%;
            transition: 0.5s;
            border-radius: 0.2rem;
          }
        }
        .news_right {
          float: right;
          width: 45rem;
          height: 14rem;
          overflow: hidden;
          p {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 6;
          }
          .link {
            position: absolute;
            font-size: 1rem;
            bottom: 0;
            &:hover {
              transition: 0.5s;
              color: #ffa300;
            }
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