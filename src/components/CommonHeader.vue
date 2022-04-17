<template>
  
    <header>
      <div class="l-content">
        <el-button @click="handleMenu" plain icon="el-icon-menu" size="mini" ></el-button>
        <h3 style="color: #fff;">首页</h3>
      </div>
      <div class="r-content">
        <el-dropdown trigger="click" size="mini">
          <span>
            <img class="user" :src="userImg" >
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item >个人中心</el-dropdown-item>
            <el-dropdown-item >退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </div>
    </header>
  
</template>

<script>
  export default {
    name:'CommonHeader',
    data(){
      return {
        userImg:require('../assets/imgs/user.png')
      }
    },
    methods:{
      handleMenu(){   //改变state的值，只能通过mutation的方式去改变store中的state
        this.$store.commit('collapseMenu')
      }
    }

  }
</script>

<style lang="less" scoped>
header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.l-content {
  display: flex;
  align-items: center;
}
.l-content .el-button {
   margin-right: 20px;
}
.r-content .user {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
</style>