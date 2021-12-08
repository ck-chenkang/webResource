<template>
  <div>
    <el-row class="tac">
      <el-menu
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-eleme"></i>
            <span>Eement</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="toMenu()">
              NavMenu 导航菜单
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },methods:{
    test(){
      console.log("----------");
    },
    toMenu(value){
      switch(value){
        case "navMenu":
          this.$router.push("");
          break;
        case "":
          this.$router.push("/index");
      }

    }
  }
};
</script>

<style>
</style>
