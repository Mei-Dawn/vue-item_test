<!--  -->
<template>
  <div>
    <el-dialog title="提示" :visible.sync="dialogVisible" size="small" :before-close="handleClose">
      <tab-edit></tab-edit>
    </el-dialog>
  </div>
</template>

<script>
  import TabEdit from '../../layout/modules/componnet/TabEdit.vue'
  export default {
    data() {
      return {
        dialogVisible: false
      }
    },
    components:{
      TabEdit
    },
    methods: {
      handleClose() {
        this.dialogVisible = false
      }
    }
  }
</script>

<style lang="less" scoped>

</style>