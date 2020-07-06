import originAxios from "axios";

export default function request(config) {
//    1.创建axios的实例
  const instance = originAxios.create({
    baseURL: "",
    timeout: 5000
  })

  // 配置请求和响应拦截
  instance.interceptors.request.use(config=>{
    return config
  },error => {
    //error
  })

  //响应拦截
  instance.interceptors.response.use(res=>{
    return res.data
  },error => {
    //error
  })

  //发送真正的网络请求
  return instance(config)

}
