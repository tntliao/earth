<template>
  <div class="header_node">
    <div class="title_box">
      <h2 class="head_title" :class="{ reset: isActive }">保护</h2>
      <img src="../../assets/images/login/02_login_icon.png" alt="" srcset="" />
      <h2 class="head_title" :class="{ reset: isActive }">环境</h2>
    </div>
    <div class="userName">
      <h2>{{ userName }}</h2>
      <img
        src="../../assets/images/public/exit.png"
        alt=""
        srcset=""
        @click="exitLogin"
      />
    </div>
  </div>
</template>

<script>
import jwt from "jsonwebtoken";
export default {
  name: "Header",
  data() {
    return {
      isActive: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isActive = true;
    });
  },
  methods: {
    exitLogin: function () {
      this.$confirm("是否退出登录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.$router.replace("login");
        localStorage.removeItem("isLogin");
        this.$message({
          type: "success",
          message: "已退出登录!",
        });
      });
    },
  },
  computed: {
    userName: function () {
      if (this.$route.query.username) {
        return jwt.verify(this.$route.query.username, "gdgxjsjljj");
      } else {
        return "";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.header_node {
  height: 5.5rem !important;
  min-height: 50px;
  border-bottom: 2px solid #ededed;
  background-color: white;
  z-index: 9999;
  position: relative;

  .title_box {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .head_title {
      font-size: 2.5rem;
      transition: 1s;
      &:nth-of-type(1) {
        transform: translateX(-50px);
      }
      &:nth-of-type(2) {
        transform: translateX(50px);
      }
      &.reset {
        transform: translateX(0);
      }
    }

    img {
      width: 5rem;
      height: 5rem;
      min-width: 35px;
      min-height: 35px;
      margin: 0.2rem 5rem;
      transition: 0.5s;
      &:hover {
        transform: rotateZ(180deg);
      }
    }
  }
  .userName {
    position: absolute;
    right: 0;
    top: 0;
    width: 16rem;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 1.7rem;
    h2 {
      color: #ffa300;
    }
    img {
      margin-left: 1.5rem;
      width: 1.7rem;
      transition: 0.4s;
      transform: rotateZ(180deg);
      cursor: pointer;
    }
  }
}
</style>