//在tab文件里面我们就会定义我们刚才所需控制我们是否展开的一个state属性
export default {
  state:{
    isCollapse:false
  },
  mutations:{ //定义改变state的方法
    collapseMenu(state){
      state.isCollapse = !state.isCollapse
    }

  }
}