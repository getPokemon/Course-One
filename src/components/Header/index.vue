<template>
  <div class="index">
    <el-dropdown>
      <span class="el-dropdown-link">
        <i class="el-icon-user"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <span @click="headClick">退出登录</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  methods: {
    headClick() {
      this.$store.commit("setLogin", false);
      this.$router.push("/");
    },
  },
};
</script>

<style lang="less" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #ffff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.index{
  float: right;
  line-height: 60px;
}
.el-icon-user{
  font-size: 20px;
}

</style>