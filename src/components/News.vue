<template>
  <div>
    <div class="news_container">
      <div class="news_content">
        <div class="news_img">
          <img src="../assets/images/detail/10_detail.png" alt="" srcset="" />
        </div>
        <div class="news_title">
          <h2>保护海洋 你我同行｜多部门携手“净滩”共护蔚蓝大海</h2>
        </div>
        <div class="author">
          <img
            src="../assets/images/login/02_login_icon.png"
            alt=""
            srcset=""
          />
          <p class="name">tntliao</p>
        </div>
      </div>
    </div>
    <div class="news_article">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem nobis
        aliquam molestias hic atque, non, similique facere iusto temporibus vero
        officia? Tenetur, veniam earum molestias quasi dicta alias optio in.
      </p>
      <img
        src="https://cdn.sspai.com/editor/u_/c5uh2j5b34td0qukc9b0.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1"
        alt=""
      />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
        reiciendis at perferendis ratione. Voluptate doloribus, eius eum
        inventore, quod eligendi dignissimos aperiam eos obcaecati repellat
        unde, iste a harum nihil ut non ab quas porro? Nobis numquam eum placeat
        et, unde nihil? Dicta saepe debitis at accusamus eos assumenda vero ad.
        Quae odit, consequatur suscipit aliquam omnis eveniet cupiditate sit.
      </p>
      <img
        src="https://cdn.sspai.com/editor/u_/c5uh2jdb34tdf6lli3fg.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1"
        alt=""
      />
    </div>
    <div class="footer">
      <div class="footer_left">
        <h2>地球，我们唯一的家。保护它就是保护我们自己</h2>
        <h2>Earth, our only home. To protect it is to protect ourselves</h2>
        <h2>земля, наш единственный дом. защищать это значит защитить себя</h2>
        <h2>
          地球、私達の唯一の家。それを守ることは私たち自身を守ることです。
        </h2>
      </div>
      <div class="footer_right">
        <a href="javascript:;">加入我们</a>
        <a href="javascript:;">寻求帮助</a>
        <a href="javascript:;">匿名举报</a>
        <a href="javascript:;">提交意见</a>
      </div>
    </div>
    <el-backtop :bottom="200">
      <di class="up">UP</di>
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
  padding: 1rem;
  color: #ffffff;
}
.news_container {
  background: white;
  width: 100%;
  animation: zoom 0.8s;

  .news_content {
    margin: 0 auto;
    padding-top: 2rem;
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
      display: flex;
      width: 6rem;
      min-width: 50px;
      height: 3.5rem;
      align-items: center;
      justify-content: space-between;
      img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
      }
      p {
        font-size: 1rem;
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

  p {
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
  height: 12rem;
  padding: 1rem;
  background: #232222;
  box-sizing: border-box;
  color: white;

  .footer_left {
    position: absolute;
    left: 15rem;
    width: 40rem;
    height: 10rem;
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
    height: 10rem;
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
</style>