<template>
  <div class="home" :style="imgSrc">
    <p>欢迎来到哈信息课程后台系统</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgSrc: {
        backgroundImage: "url(" + require("../assets/img/home.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition:'center center',
        
      },
    };
  },
};
</script>
<style lang="less" scoped>
.home {
  height: 100%;
  p {
    font-size: 50px;
    font-weight: bolder;
    color: #fff;
    text-align: center;
    user-select: none;
    padding-top: 200px;
  }
}
</style>
