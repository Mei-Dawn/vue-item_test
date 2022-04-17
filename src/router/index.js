
import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const Main = () => import('../views/Main')
const User = () => import('../views/User')
const Home = () => import('../views/home')



const routes = [
  
  {
    path:'/',   //根路徑
    name:'Main' ,   //name 是可要可不要的
    // redirect:'/Home',
    component:Main ,   //有两种引入方式 一：直接引入对应的vue页面  二：应用按需引入的方式
    children:[
      {
        path:'/home',
        name:'home',
        component:Home
      },
      {
        path:'/user',
        name:'User',
        component:User
      }

    ]
  },
 
]

export default new VueRouter({
  mode:'history',  //路由的匹配模式
  routes
})