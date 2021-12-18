import axios from "axios";

const instance = axios.create(); // 创建一个axios的实例
instance.interceptors.response.use(function(resp) {
  return resp.data.data;
});

export default instance;