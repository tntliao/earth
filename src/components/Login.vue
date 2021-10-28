<template>
  <div class="content">
    <div class="login_container" :class="{ login_active: isActive }">
      <el-tooltip
        class="item"
        effect="dark"
        content="返回登录"
        placement="right"
      >
        <img
          class="imgNode"
          src="../assets/images/02_login_icon.png"
          :class="{ img_active: isActive }"
          @click="goLogin"
        />
      </el-tooltip>

      <form @submit.prevent>
        <div class="form-control">
          <input type="text" required v-model="username" />
          <label ref="label">账号</label>
        </div>
        <div class="form-control">
          <input type="password" required v-model="password" />
          <label ref="label">密码</label>
        </div>
        <button v-if="isShow" class="btn" @click="goHome">登录</button>
        <button v-else class="btn" @click="registeUser">注册</button>
      </form>
      <p class="text" :class="{ hidden: !isShow }">
        还没注册账号？ <a @click="goRegister" href="javascript:;">注册</a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      isActive: false,
      username: "admin",
      password: "admin",
      path: "",
    };
  },
  methods: {
    goHome: function () {
      const username = localStorage.getItem(this.username + "username");
      const password = localStorage.getItem(this.password + "password");

      if (
        (this.username === username && this.password === password) ||
        (this.username === "admin" && this.username === "admin")
      ) {
        this.$router.push("home");
        this.$message({
          message: `欢迎${this.username}为保护环境付出一份力量`,
          type: "success",
          center: true,
          offset: 88,
        });
      } else {
        this.$message({
          message: "账号或密码错误",
          type: "warning",
          center: true,
        });
      }
    },
    goRegister: function () {
      this.$router.push("register");
      this.path = "/register";
    },
    registeUser: function () {
      if (!this.username || !this.password) {
        this.$message({
          message: "账号密码不能为空",
          type: "warning",
          center: true,
        });
        return;
      }
      localStorage.setItem(this.username + "username", this.username);
      localStorage.setItem(this.password + "password", this.password);
      this.$message({
        message: "账号注册成功3秒后返回登录页",
        type: "success",
        center: true,
      });
      setTimeout(() => {
        this.path = "/login";
      }, 3000);
    },
    goLogin: function () {
      if (this.path === "/login") return;
      this.$router.push("login");
    },
  },
  computed: {
    isShow() {
      return this.path === "/login";
    },
  },
  mounted() {
    setTimeout(() => {
      this.isActive = true;
    });

    const labels = document.querySelectorAll(".form-control label");
    labels.forEach((label) => {
      label.innerHTML = label.innerText
        .split("")
        .map(
          (letter, idx) =>
            `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
        )
        .join("");
    });
    this.path = this.$route.path;
  },
  watch: {
    "$route.path": function (val) {
      this.path = val;
    },

    username: function (val) {
      let username = val.replace(/[\u4e00-\u9fa5]/gi, "");
      this.username = username;
    },
  },
};
</script>
<style lang="less">
.content {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("../assets/images/03_login_bg.png");

  .login_container {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    left: 50%;
    top: 40%;
    width: 300px;
    height: 365px;
    border-radius: 2px;
    transition: transform 1.3s;
    transform: translate(-50%, -50%) scale(0.7);
    background-color: rgba(255, 255, 255, 0.9);

    .imgNode {
      width: 65px;
      height: 65px;
      transition: 0.5s;
      cursor: pointer;

      &.img_active {
        transform: rotateZ(360deg);
      }
    }
    form {
      text-align: center;
      .form-control {
        width: 200px;
        margin: 20px 0 30px;
        position: relative;

        input {
          border: 0;
          width: 100%;
          display: block;
          padding: 15px 0;
          font-size: 18px;
          color: #ffa300;
          background-color: transparent;
          border-bottom: 2px solid white;

          &:focus {
            outline: 0;
            border-bottom-color: #ffa300;
          }
        }

        label {
          left: 0;
          top: 15px;
          position: absolute;
          span {
            font-size: 18px;
            display: inline-block;
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
        }
      }
      .btn {
        border: 0;
        width: 80%;
        padding: 10px;
        font-size: 16px;
        cursor: pointer;
        font-family: inherit;
        background-color: rgb(255, 255, 255);

        &:focus {
          outline: 0;
        }
        &:active {
          transform: scale(0.98);
        }
      }
    }
    &.login_active {
      transform: translate(-50%, -50%) scale(1);
    }
  }
  .text {
    margin-top: 1rem;
    transition: 0.5s;
    &.hidden {
      opacity: 0;
    }
  }
}

@media screen and (max-width: 450px) {
  .text {
    font-size: 2.7rem;
  }
}
.form-control input:focus + label span,
.form-control input:valid + label span {
  transform: translateY(-30px);
  color: #ffa300;
}
</style>