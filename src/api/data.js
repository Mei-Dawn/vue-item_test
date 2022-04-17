//后面会将接口请求都写在data.js就是文件里面

import axios from './axios'

//写一个接口的调用   定义完了一个接口的请求方法
export const getMenu = (param) => {
  return axios.request({
    url:'/permission/getMenu',
    method:'post',
    data:param
  })
}

export const getDate = () => {
  return axios.request({
    url:'/home/getDate'
  })
}

