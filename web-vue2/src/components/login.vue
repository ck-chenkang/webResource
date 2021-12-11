<template>
  <div class="login">
    <el-row :gutter="20" class="">
      <el-col :span="8"
        ><div class="">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="login-form"
          >
            <el-form-item label="账号" prop="count">
              <el-input
                v-model.number="ruleForm.count"
                placeholder="账号至少为6位"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input
                type="password"
                v-model="ruleForm.pass"
                autocomplete="off"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-row :gutter="20">
              <el-col :span="12" :offset="0">
                <el-form-item prop="type">
                  <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox label="记住我" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-col>
              <el-col :span="12" :offset="0">
                <el-form-item>
                  <el-button type="primary" @click="login(ruleForm)"
                    >登录</el-button
                  >
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12" :offset="0">
                <el-form-item>
                  忘记密码？
                  <router-link to="/">找回</router-link>
                </el-form-item></el-col
              >
              <el-col :span="12" :offset="0">
                <el-form-item>
                  还没有账号？
                  <router-link to="/">马上注册</router-link>
                </el-form-item></el-col
              >
            </el-row>
          </el-form>
        </div></el-col
      >
      <el-col :span="16"><div class="login-img"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    var checkCount = (rule, value, callback) => {
      console.log("value.length -- " + value.length);
      if (!value) {
        return callback(new Error("账号不能为空"));
      }

      if (value == "admin") {
      } else {
        if (new String(value).length < 6) {
          return callback(new Error("账号至少为6位"));
        }
      }
    };
    var checkPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
    };
    return {
      ruleForm: {
        count: "",
        pass: "",
        type: [],
      },
      rules: {
        pass: [{ validator: checkPass, trigger: "blur" }],
        count: [{ validator: checkCount, trigger: "blur" }],
      },
    };
  },
  methods: {
    login(ruleForm) {
      window.localStorage.setItem("count", ruleForm.count);
      var count = window.localStorage.getItem("count");
      if(count == "admin"){
        this.$router.push("/index");
      }else{
        alert("账号要是admin才可以登录");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  // 去除下面的滚动条
  box-sizing: border-box;
  width: 100%;
  padding: 20px;

  height: 800px;
}

.login-form {
  margin-top: 180px;
}

// 下面这个是我看到别人网站登录页面，很喜欢，就给搬过来了
// https://cylink.me/auth/login
.login-img {
  width: 100%;
  height: 800px;
  background-image: url("../assets/img/loginBack.jpeg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 0 0%;
  -webkit-animation-name: backgroundWalkY;
  animation-name: backgroundWalkY;
  -webkit-animation-duration: 70s;
  animation-duration: 70s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
}

@-webkit-keyframes backgroundWalkY {
  0% {
    background-position: 0 0%;
  }
  100% {
    background-position: 0 100%;
  }
}

@keyframes backgroundWalkY {
  0% {
    background-position: 0 0%;
  }
  100% {
    background-position: 0 100%;
  }
}

@-webkit-keyframes backgroundWalkX {
  0% {
    background-position: 0 0%;
  }
  100% {
    background-position: 100% 0;
  }
}

@keyframes backgroundWalkX {
  0% {
    background-position: 0 0%;
  }
  100% {
    background-position: 100% 0;
  }
}
</style>
