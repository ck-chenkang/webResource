<template>
  <div class="home">
    <el-container>
      <el-aside class="home-menu" width="200px" >
        <left-menu></left-menu>
      </el-aside>
      <el-container>
        <el-main>
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
.home-menu{
  height: 906px;
  background-color: #545c64;
}
</style>
