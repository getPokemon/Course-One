import axios from "axios";

const instance = axios.create(); 
instance.interceptors.response.use(function(resp) {
  return resp.data.data;
});

export default instance;