<template>
  <div class="home">
    <el-container>
      <el-aside>
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
.el-aside {
  background-color: gray;
  color: black;
  width: 10%;
}
</style>
