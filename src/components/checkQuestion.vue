<template>
  <div>
    <el-breadcrumb separator=">">
      <el-breadcrumb-item >题库</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/mainPage/subject' }">选择科目</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/mainPage/questionBank' }">题库</el-breadcrumb-item>
      <el-breadcrumb-item>查看题目</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>this is the content page of question No.{{this.$route.params.questionId}}</h1>
    <el-form rel="form" >
      <el-form-item label="习题编号">
        <el-input placeholder="输入关键词" :value="currQuestion.id"></el-input>
      </el-form-item>
      <el-form-item label="章节信息">
        <el-input placeholder="输入关键词" :value="currQuestion.chapterId+currQuestion.chapterName"></el-input>
      </el-form-item>
      <el-form-item label="题目类型">
        <el-input placeholder="输入关键词" :value="currQuestion.chapterId+currQuestion.chapterName"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {questions} from "@/store/question/questions";
import {currQuestion} from "@/store/question/currQuestion";

export default {
  name: "checkQuestion",
  questions:questions,
  data(){
    return{
      currQuestion:currQuestion,
    }
  },
}
</script>

<style scoped>

</style>