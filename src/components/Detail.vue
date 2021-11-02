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
          </div>
        </div>
        <div class="more" @click="getDetail">获取更多</div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  banner1,
  banner2,
  banner3,
  banner4,
  detail1,
  detail2,
  detail3,
  detail4,
  detail5,
  detail6,
  detail7,
  detail8,
} from "../util/images";
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
          detail: `海洋的健康与生物多样性与人类的生存与福祉息息相关。
          人类致力于通过预防和终止破坏性的行为来维护和修复海洋生态系
          统，同时倡导海洋保护区的创建，以保护濒危的海洋哺乳动物和其
          他物种。`,
        },
        {
          imgurl: banner2,
          title: "冰川",
          detail: `冰川是气候变化的一个敏感指标，而且很容易被观察到
          。无论海拔高度或纬度如何，冰川都在以极快速度消退。然而，到
          目前为止，人们只部分了解阿拉斯加、冰岛和阿尔卑斯山的冰川融
          化速度最快。帕米尔山脉、兴都库什山脉和喜马拉雅山脉的高山冰
          川受到的影响也非常显著。`,
        },
        {
          imgurl: banner3,
          title: "沙漠",
          detail: `土地沙漠化包括气候变异和人类活动在内的种种因素造
          成的干旱、半干旱和亚湿润干旱地区的土地退化,由于人为过度的
          经济活动,破坏其平衡,使原非沙漠的地区出现了类似沙漠景观的环
          境变化过程，土地沙漠化和土地荒漠化差别不大,但荒漠化严重程度
          要高`,
        },
        {
          imgurl: banner4,
          title: "雨林",
          detail: `在21世纪，和许多其他的自然场所一样，热带雨林是一种
          稀缺的资源。就在几千年以前，热带雨林覆盖了地球陆地表面的
          多达12%的面积，大约155万平方公里，但是现在只有不到5%的地球陆
          地被这些热带森林覆盖。在南美的亚马逊河流域发现了最大的未被破坏
          的热带雨林带。`,
        },
      ],
      detailData: [
        [
          {
            id: "001",
            imgurl: detail1,
            detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non
              maiores sunt nisi pariatur vel, rerum enim unde dolorum harum
              laboriosam, consequuntur suscipit quod, tempore officia veritatis
              nostrum quisquam. Omnis obcaecati minus necessitatibus harum sequi
              atque tempore quis vero error vitae praesentium, maxime labore
              nobis reiciendis maiores totam soluta eaque?`,
          },
          {
            id: "002",
            imgurl: detail2,
            detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non
              maiores sunt nisi pariatur vel, rerum enim unde dolorum harum
              laboriosam, consequuntur suscipit quod, tempore officia veritatis
              nostrum quisquam. Omnis obcaecati minus necessitatibus harum sequi
              atque tempore quis vero error vitae praesentium, maxime labore
              nobis reiciendis maiores totam soluta eaque?`,
          },
        ],
        [
          {
            id: "003",
            imgurl: detail3,
            detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non
              maiores sunt nisi pariatur vel, rerum enim unde dolorum harum
              laboriosam, consequuntur suscipit quod, tempore officia veritatis
              nostrum quisquam. Omnis obcaecati minus necessitatibus harum sequi
              atque tempore quis vero error vitae praesentium, maxime labore
              nobis reiciendis maiores totam soluta eaque?`,
          },
          {
            id: "004",
            imgurl: detail4,
            detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non
              maiores sunt nisi pariatur vel, rerum enim unde dolorum harum
              laboriosam, consequuntur suscipit quod, tempore officia veritatis
              nostrum quisquam. Omnis obcaecati minus necessitatibus harum sequi
              atque tempore quis vero error vitae praesentium, maxime labore
              nobis reiciendis maiores totam soluta eaque?`,
          },
        ],
        [
          {
            id: "005",
            imgurl: detail5,
            detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non
              maiores sunt nisi pariatur vel, rerum enim unde dolorum harum
              laboriosam, consequuntur suscipit quod, tempore officia veritatis
              nostrum quisquam. Omnis obcaecati minus necessitatibus harum sequi
              atque tempore quis vero error vitae praesentium, maxime labore
              nobis reiciendis maiores totam soluta eaque?`,
          },
          {
            id: "006",
            imgurl: detail6,
            detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non
              maiores sunt nisi pariatur vel, rerum enim unde dolorum harum
              laboriosam, consequuntur suscipit quod, tempore officia veritatis
              nostrum quisquam. Omnis obcaecati minus necessitatibus harum sequi
              atque tempore quis vero error vitae praesentium, maxime labore
              nobis reiciendis maiores totam soluta eaque?`,
          },
        ],
        [
          {
            id: "007",
            imgurl: detail7,
            detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non
              maiores sunt nisi pariatur vel, rerum enim unde dolorum harum
              laboriosam, consequuntur suscipit quod, tempore officia veritatis
              nostrum quisquam. Omnis obcaecati minus necessitatibus harum sequi
              atque tempore quis vero error vitae praesentium, maxime labore
              nobis reiciendis maiores totam soluta eaque?`,
          },
          {
            id: "008",
            imgurl: detail8,
            detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non
              maiores sunt nisi pariatur vel, rerum enim unde dolorum harum
              laboriosam, consequuntur suscipit quod, tempore officia veritatis
              nostrum quisquam. Omnis obcaecati minus necessitatibus harum sequi
              atque tempore quis vero error vitae praesentium, maxime labore
              nobis reiciendis maiores totam soluta eaque?`,
          },
        ],
      ],
      backupData: [
        [
          {
            id: "009",
            imgurl: detail3,
            detail: "asdasdasdasdasdasdsaaaaaaaaadqwdqwdqwdqwdqwdqwd",
          },
          {
            id: "010",
            imgurl: detail4,
            detail: "dqwdqwdwqdsacasggsdgsdfewrqwrevcvsdadsADSFDSAGA",
          },
        ],
      ],
    };
  },
  methods: {
    goBack: function () {
      document.querySelector("html").style.background = "transparent";
      this.$router.back();
    },
    getDetail: function () {
      const nowData = this.detailData[this.val];
      const moreData = this.backupData[this.val] || [];
      const newData = [...nowData, ...moreData];
      this.detailData.splice(this.val, 1, newData);
    },
  },
  beforeMount() {
    document.querySelector("html").style.background = "#ecf5f9";
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
  unmounted() {
    console.log("a");
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
        }
      }
      .more {
        position: absolute;
        width: 9rem;
        height: 2.8rem;
        text-align: center;
        line-height: 3rem;
        border-radius: 0.2rem;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
        font-size: 1rem;
        background: rgb(255, 255, 255);
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