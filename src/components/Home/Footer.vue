<template>
  <div>
    <div class="footer">
      <img
        class="logo"
        src="../../assets/images/login/02_login_icon.png"
        alt=""
      />
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
    <p class="footer_p">Copyright©2121-2022&nbsp;贡献者:tntliao</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
.footer {
  position: relative;
  width: 100%;
  height: 20rem;
  padding: 5rem;
  box-sizing: border-box;
  background: whitesmoke;

  .logo {
    position: absolute;
    width: 5rem;
    min-width: 35px;
    transition: 0.5s;
    top: 50%;
    animation: earth 5s linear infinite;
  }
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
      color: black;
    }
    p {
      float: left;
    }
  }
}
.footer_p {
  text-align: center;
  font-size: 1rem;
  padding: 0.5rem 0;
}

@keyframes earth {
  0% {
    transform: translateY(-50%) rotate(0deg);
  }
  100% {
    transform: translateY(-50%) rotate(360deg);
  }
}
</style>