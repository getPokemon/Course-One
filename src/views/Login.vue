<template>
  <div class="index" :style="imgSrc">
    <div class="box">
      <label for="user">账号</label>:&nbsp;&nbsp;<input type="text" id="user" />
      <br />
      <label for="password">密码</label>:&nbsp;&nbsp;<input
        type="password"
        id="password"
      />
      <br />
      <span class="btn" @click="login">登录</span>
    </div>
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
  
  methods:{
    login(){
       this.$router.replace('/home');
    }
  },
  
};
</script>

<style lang="less" scoped>
.index {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    background: rgba(0, 0, 0, 0.2);
    padding: 50px;
    border-radius: 20px;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.4);
    #user,
    #password {
      width: 200px;
      margin-bottom: 10px;
      height: 25px;
      border-radius: 7px;
      border: none;
      padding-left: 9px;
    }
    #password {
      margin-bottom: 30px;
    }
    .btn {
      display: block;
      width: 200px;
      height: 25px;
      margin: 0 auto;
      font-weight: bold;
      text-align: center;
      border-radius: 7px;
      user-select: none;
      cursor: pointer;
      background-color: white;
      color: #333;
    }
    .btn:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5) inset;
      font-size: 12px;
      font-weight: bold;
      line-height: 25px;
      color: #9999;
    }
  }
  label {
    font-weight: bold;
    color: #FFFF;
  }
}
</style>