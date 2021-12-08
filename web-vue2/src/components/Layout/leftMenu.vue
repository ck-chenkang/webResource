<template>
  <div>
    <el-row class="tac">
      <el-menu
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu
          v-for="(item1, index1) in $store.state.menus.data"
          :index="index1"
          :key="index1"
        >
        <!-- :key="index" 不加，会报错 -->
          <template slot="title">
            <i class="el-icon-eleme"></i>
            <span>{{ item1.span }}</span>
          </template>
          <el-menu-item-group v-if="item1.subMenu.length != 0">
            <el-menu-item v-for="(item2, index2) in item1.subMenu" :index="index1 + '-' + index2" @click="toMenu(item2.url)" :key="index2">
              {{item2.span}}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    test() {},
    toMenu(value) {
      switch (value) {
        case "element\/navMenu":
          this.$router.push("/index");
          break;
        case undefined:
          console.log("in 404");
          this.$router.push("/404");
          break;
      }
    },
  },
};
</script>

<style>
</style>
