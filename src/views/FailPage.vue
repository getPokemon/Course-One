<template>
  <div class="index">
    <el-empty>
      <el-button type="primary" @click="handClick">回到首页</el-button>
    </el-empty>
  </div>
</template>

<script>
export default {
    methods: {
        handClick(){
            this.$router.push("/home")
        }
    },
};
</script>

<style lang="less" scoped>
.index{
   box-sizing: border-box;
   padding:  50px 40px;
}

</style>