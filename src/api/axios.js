import axios from 'axios'
import config from '../config'

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

class HttpRequest{
    constructor(baseUrl){
      this.baseUrl = baseUrl
    }

    getInsideConfig(){  //定义一个方法  这个方法是用于定义axios一个相关的配置i
      const config = {
        baseUrl:this.baseUrl,
        header:{}
      }
      return config

    }
    interceptors(instance){
      // 添加请求拦截器
      instance.interceptors.request.use(function (config) {
          // 在发送请求之前做些什么
          return config;
        }, function (error) {
          // 对请求错误做些什么
          return Promise.reject(error);
        });

        // 添加响应拦截器
        instance.interceptors.response.use(function (response) {
          console.log('response',response);
          // 对响应数据做点什么
          return response;
        }, function (error) {
          console.log('error',error);

          // 对响应错误做点什么
          return Promise.reject(error);
        });
    }
    request(options){  //这个函数实际上就是我们后续在进行一个接口请求的时候我们就会调用这里的request的函数 这个函数会接收一个我们传入的一个相关的配置
      //对axios使用create方法进行一个实例的创建
      const instance = axios.create()
      options = {...this.getInsideConfig(),...options}      //options就是我们传入的相关的参数，  同时我们还要拿到我们的当前这个所配置的一些相关信息
                                           //...this.getInsideConfig将我们调用这个函数拿到的对象进行一个解构
                                          //...options将我们传进来的一个参数进行解构
      this.interceptors(instance)          //调用拦截器，调用拦截器的时候会将我们创建的axios实例传入进去
      return instance(options)   //返回接口请求的结果
    }
  }

export default new HttpRequest(baseUrl)    //对外暴露一个class的实例

