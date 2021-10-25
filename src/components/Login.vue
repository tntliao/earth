<template>
  <div class="content">
    <div class="login_container" :class="{ login_active: isActive }">
      <img
        class="imgNode"
        src="../assets/images/02_login_icon.png"
        :class="{ img_active: isActive }"
      />
      <form @submit.prevent>
        <div class="form-control">
          <input type="text" required v-model="username" />
          <label ref="label">账号</label>
        </div>
        <div class="form-control">
          <input type="password" required v-model="password" />
          <label ref="label">密码</label>
        </div>
        <button class="btn" @click="goHome">Login</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      isActive: false,
      username: "",
      password: "",
    };
  },
  methods: {
    goHome: function () {
      this.$router.push("home");
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
  },
};
</script>

<style>
.content {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  background-image: url("../assets/images/03_login_bg.png");
  background-size: cover;
}

.imgNode {
  width: 65px;
  height: 65px;

  transition: 0.5s;
}

.login_container {
  width: 300px;
  height: 340px;
  position: absolute;
  left: 50%;
  top: 40%;
  border-radius: 2px;
  transform: translate(-50%, -50%) scale(0.7);
  background-color: rgba(255, 255, 255, 0.9);
  transition: transform 1.3s;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login_container.login_active {
  transform: translate(-50%, -50%) scale(1);
}
.img_active {
  transform: rotateZ(360deg);
}

form {
  text-align: center;
}

.form-control {
  width: 200px;
  margin: 20px 0 30px;
  position: relative;
}

.form-control input {
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid white;
  display: block;
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  color: #ffa300;
}

.form-control input:focus {
  outline: 0;
  border-bottom-color: #ffa300;
}

.form-control label {
  position: absolute;
  left: 0;
  top: 15px;
}

.form-control label span {
  display: inline-block;
  font-size: 18px;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.form-control input:focus + label span,
.form-control input:valid + label span {
  transform: translateY(-30px);
  color: #ffa300;
}

.btn {
  cursor: pointer;
  width: 80%;
  background-color: rgb(255, 255, 255);
  padding: 10px;
  border: 0;
  font-size: 16px;
  font-family: inherit;
}

.btn:focus {
  outline: 0;
}

.btn:active {
  transform: scale(0.98);
}

.text {
  margin-top: 30px;
}
</style>