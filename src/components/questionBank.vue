<template>
  <div>
    <div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item >题库</el-breadcrumb-item>
        <el-breadcrumb-item><a href="#">选择科目</a></el-breadcrumb-item>
      </el-breadcrumb></div>
    <div>
      <el-input
          placeholder="请输入内容"
          v-model="keyword">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "questionBank",
  data(){
    return{
      keyword:' ',
    }
  }
}
</script>

<style scoped>

</style>