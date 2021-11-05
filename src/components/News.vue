<template>
  <div>
    <div class="news_container">
      <div class="news_content">
        <div class="news_img">
          <img :src="wholeData[detailVal][index].imgurl" alt="" srcset="" />
        </div>
        <div class="news_title">
          <h2>{{ wholeData[detailVal][index].title }}</h2>
        </div>
        <div class="author">
          <div class="left">
            <img
              src="../assets/images/login/02_login_icon.png"
              alt=""
              srcset=""
            />
            <p class="name">保护地球环境</p>
          </div>
          <p class="timer">{{ wholeData[detailVal][index].time }}</p>
        </div>
      </div>
    </div>
    <div class="news_article">
      <p>{{ wholeData[detailVal][index].article.top }}</p>
      <img :src="wholeData[detailVal][index].pictures.top" alt="" />
      <p>{{ wholeData[detailVal][index].article.center }}</p>
      <img :src="wholeData[detailVal][index].pictures.center" alt="" />
      <p v-if="wholeData[detailVal][index].article.bottom">
        {{ wholeData[detailVal][index].article.bottom }}
      </p>
      <img :src="wholeData[detailVal][index].pictures.bottom" alt="" />
    </div>
    <div class="footer">
      <div class="footer_left">
        <h2>要做保护环境的有为之人，不做污染环境的负罪之辈</h2>
      </div>
      <div class="footer_right">
        <a href="javascript:;">加入我们</a>
        <a href="javascript:;">寻求帮助</a>
        <a href="javascript:;">匿名举报</a>
        <a href="javascript:;">提交意见</a>
      </div>
    </div>
    <el-backtop :bottom="120" class="hidden">
      <div class="up">UP</div>
    </el-backtop>
  </div>
</template>

<script>
import mixin from "../mixin";
export default {
  name: "News",
  data() {
    return {
      index: this.$route.query.index,
      detailVal: this.$route.query.detailVal,
    };
  },
  mounted() {
    console.log(this.detailVal);
  },
  mixins: [mixin],
};
</script>

<style lang="less" scoped>
.up {
  height: 100%;
  width: 100%;
  background-color: #dddddd;
  text-align: center;
  line-height: 40px;
  padding: 0.7rem 1rem;
  color: #ffffff;
  border-radius: 0.2rem;
  transition: 0.5s;
  &:hover {
    color: #ffa300;
  }
}
.news_container {
  background: white;
  width: 100%;
  animation: zoom 0.8s;

  .news_content {
    margin: 0 auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 43rem;
    transition: 0.5s;
    background: rgb(255, 255, 255);
    position: relative;
    .news_img {
      width: 43rem;
      height: 20rem;
      margin-bottom: 1rem;
      transition: 0.5s;
      position: relative;
      overflow: hidden;
      img {
        position: absolute;
        top: -28%;
        width: 100%;
        transition: 0.5s;
      }
    }
    .news_title {
      width: 43rem;
      font-size: 1.5rem;
      transition: 0.5s;
      margin-bottom: 0.2rem;
    }
    .author {
      height: 3.5rem;
      .left {
        float: left;
        display: flex;
        align-items: center;
        img {
          width: 2.5rem;
          height: 2.5rem;
          margin-right: 1rem;
          border-radius: 50%;
        }
        p {
          font-size: 1rem;
        }
      }
      .timer {
        float: right;
        line-height: 3.5rem;
      }
    }
  }
}
.news_article {
  background: white;
  margin: 0 auto;
  width: 43rem;
  padding: 2rem 9rem;
  overflow: hidden;
  animation: zoom 0.8s;
  transition: 0.5s;
  p {
    text-indent: 2em;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  img {
    width: 100%;
    margin-bottom: 1rem;
  }
}
.footer {
  position: relative;
  width: 100%;
  height: 6rem;
  padding: 1rem;
  background: #232222;
  box-sizing: border-box;
  color: white;

  .footer_left {
    position: absolute;
    left: 15rem;
    width: 40rem;
    height: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 1rem;

    h2 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .footer_right {
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    right: 5rem;
    width: 40rem;
    height: 4rem;
    font-size: 1rem;
    a {
      color: white;
    }
    p {
      float: left;
    }
  }
}
@keyframes zoom {
  0% {
    opacity: 0;
    transform: translateY(200px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@media screen and (max-width: 700px) {
  .news_container {
    .news_content {
      width: 80rem;
      .news_img {
        height: 35rem;
        width: 100%;
      }
      .news_title {
        width: 100%;
        font-size: 3rem;
      }
      .author {
        .left {
          img {
            width: 4.5rem;
            height: 4.5rem;
          }
        }
      }
    }
  }
  .news_article {
    width: 82rem;
  }
  .footer {
    height: 10rem;
    padding: 3rem;
    .footer_left {
      left: 50%;
      width: 60rem;
      transform: translateX(-50%);
    }
    .footer_right {
      display: none;
    }
  }
  .hidden {
    display: none;
  }
}
</style>