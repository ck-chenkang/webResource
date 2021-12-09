<template>
  <div>
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <template v-for="(item, index) in $store.state.menus.data">
        <!--表示 有一级菜单-->
        <router-link v-if="item.subMenu.length == 0" :to="item.url" :key="index">
          <el-menu-item class="dropItem" :index="index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.span }}</span>
          </el-menu-item>
        </router-link>

        <!--表示 有二级或者多级菜单 -->
        <el-submenu
          v-if="item.subMenu && item.subMenu.length >= 1 "
          :index="index"
          :key="index"
        >
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.span }}</span>
          </template>
          <!--直接定位到子路由上，子路由也可以实现导航功能-->
          <router-link
            v-for="(citem, cindex) in item.subMenu"
            :to="item.url + citem.url"
            :key="cindex"
          >
            <el-menu-item
              :index="index + 1 + '-' + cindex"
            >
              <span slot="title">{{ citem.span }}</span>
            </el-menu-item>
          </router-link>
        </el-submenu>
      </template>
    </el-menu>
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
  },
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
