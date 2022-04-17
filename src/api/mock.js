import  Mock  from 'mockjs'  
//通过模块的方式将我们的回调函数进行一个引入
import homeApi from './mockServeDate/home'

// 写对应拦截器的一个规则
Mock.mock('/home/getDate',homeApi.getStatisticalData)      //里面的参数是一个url地址（或正则规则）  还有接收一个回调函数 这个回调函数里面返回的是具体的一个数据