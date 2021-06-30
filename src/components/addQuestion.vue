<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item >题库</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/mainPage/subject' }">选择科目</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/mainPage/questionBank' }">题库</el-breadcrumb-item>
      <el-breadcrumb-item>添加题目</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "addQuestion"
}
</script>

<style scoped>

</style>