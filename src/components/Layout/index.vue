<template>
  <el-container>
    <el-aside width="200px"><slot name="aside"></slot></el-aside>
    <el-container>
      <el-header><slot name="header"></slot></el-header>
      <el-main :height=seeNumber><router-view></router-view></el-main>
      <el-footer><slot name="footer"></slot></el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      seeNumber: 0,
    };
  },
  mounted() {
    this.seeNumber = document.body.clientHeight - 120 + "px";
  },
};
</script>

<style lang="less" scoped>
.el-header,
.el-footer {
  color: #333;
  background-color: #1e1e1e;
  overflow: hidden;
}
.el-footer {
  text-align: center;
}
.el-aside {
  height: 100vh;
}
.el-main {
  background-color: #e9eef3;
  padding: 0 !important;

  overflow: hidden;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>