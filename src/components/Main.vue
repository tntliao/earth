<template>
  <div class="main_container">
    <template>
      <el-carousel :interval="4000" type="card" height="400px">
        <el-carousel-item v-for="item in 6" :key="item" class="card_item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </template>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style scoped>
.main_container {
  margin-top: 1rem;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.card_item {
  border-radius: 6px;
}
</style>