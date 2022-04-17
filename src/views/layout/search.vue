<!--  -->
<template>
  <div>
    <div class="mainheader">
      <div class="search">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="审批人">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="范围">
            <el-select v-model="formInline.region" placeholder="范围">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="审批人">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="范围">
            <el-select v-model="formInline.region" placeholder="范围">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div class="btn">
        <el-button type="primary" class="btn1" @click="open">查询</el-button>
        <el-button type="primary" class="btn2" @click="">编辑</el-button>
      </div>
    </div>
    <my-dialog ref="mydialog"></my-dialog>
  </div>
</template>

<script>
  import MyDialog from '@/views/layout/modules/MyDialog.vue'
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    components:{
      MyDialog
    },
    methods:{
      open(){
        this.$refs.mydialog.dialogVisible = true
      }
    }
  }
</script>

<style lang="less" scoped>
  .mainheader {
    display: flex;
    width: 100%;
    padding: 30px;

    .search {
      width: 95%;

    .el-form {
        display: flex;
        flex-wrap: wrap;

        .el-form-item {
          display: flex;
          flex-wrap: nowrap;
          width: 32.3%;

          .el-input {
            width: 150% !important;
          }

          .el-select {
            width: 150% !important;
          }
        }

      }
    }

      .btn {
        width: 5%;
        
        .btn1 {
          margin-bottom: 22px;
        }
        .btn2 {
          margin-left:0
        }
      }
    }
</style>