<template>
  <div>
    <el-row class="tac">
      <el-menu
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <template v-for="(item, index) in menuData">
          <!--表示 有一级菜单-->
          <router-link v-if="!item.noDropdown" :to="item.url" :key="index">
            <el-menu-item class="dropItem" :index="parseInt(index) + 1">
              <i class="el-icon-menu"></i>
              <span slot="title">{{ item.span }}</span>
            </el-menu-item>
          </router-link>

          <!--表示 有二级或者多级菜单 -->
          <el-submenu
            v-if="item.subMenu && item.subMenu.length >= 1 && !item.noDropdown"
            :index="parseInt(index) + 1"
            :key="index"
          >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.span }}</span>
            </template>
            <!--直接定位到子路由上，子路由也可以实现导航功能-->
            <router-link
              v-for="(citem, cindex) in item.subMenu"
              :to="item.url + citem.url"
              :key="cindex"
            >
              <el-menu-item
                :index="(parseInt(index) + 1) + '-' + (parseInt(cindex) + 1)"
              >
                <span slot="title">{{ citem.span }}</span>
              </el-menu-item>
            </router-link>
          </el-submenu>
        </template>
      </el-menu>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuData: {},
    };
  },
  mounted() {
    this.menuData = this.$store.state.menus.data;
  }
};
</script>

<style>

.router-link-active {
  text-decoration: none;
}

a {
  text-decoration: none;
}

</style>
