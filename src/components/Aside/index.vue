<template>
  <div class="index">
    <el-col :span="12">
      <el-menu
        default-active="0"
        class="el-menu-vertical-demo"
        background-color="#1E1E1E"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>课程信息</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/mathematics">数学</el-menu-item>
            <el-menu-item index="/language">语文</el-menu-item>
            <el-menu-item index="/music">音乐</el-menu-item>
            <el-menu-item index="/fineArts">美术</el-menu-item>
            <el-menu-item index="/painting">绘画</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/information">
          <i class="el-icon-menu"></i>
          <span slot="title">报班人信息</span>
        </el-menu-item>
        <el-menu-item index="/statisticalchart">
          <i class="el-icon-document"></i>
          <span slot="title">可视数据图</span>
        </el-menu-item>
        <el-menu-item index="/uploaddata">
          <i class="el-icon-setting"></i>
          <span slot="title">上传数据流</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
};
</script>

<style lang="less" scoped>
.index {
  height: auto;
}
.el-menu {
  border-right: solid 1px #1e1e1e;
  width: 200px;
  padding-top: 40px;
  box-sizing: border-box;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 100vh;
  box-sizing: border-box;
}
</style>