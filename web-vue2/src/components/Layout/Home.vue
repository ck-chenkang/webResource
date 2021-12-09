<template>
  <div class="home">
    <el-container>
      <el-aside class="home-menu" width="200px">
        <left-menu></left-menu>
      </el-aside>
      <el-container>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import leftMenu from "./leftMenu.vue";
export default {
  components: { leftMenu },
};
</script>

<style lang="less" scoped>
.home-menu {
  background-color: #fff;

  // top、left、bottom结合 position: absolute定位，刚好完成盒子的定位
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
}

.main {
  background-color:#fff;
  width: 1670px;
  position: absolute;
  right: 20px;
  top: 20px;
  bottom: 20px;
}
</style>
