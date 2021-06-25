<template>
  <div>
    <div>
      <el-breadcrumb separator=">">
        <el-breadcrumb-item >题库</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/mainPage/subject' }">选择科目</el-breadcrumb-item>
        <el-breadcrumb-item><a href="#">题库</a></el-breadcrumb-item>
      </el-breadcrumb></div>
    <el-main>
      <el-form rel="form" model="form" :inline="true">
        <el-form-item label="习题章节">
          <el-select v-model="form.chapter" placeholder="请选择">
            <el-option
                v-for="item in chapters.chapters"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="习题类型">
          <el-select v-model="form.type" placeholder="请选择">
            <el-option
                v-for="item in questionTypes.types"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="关键词">
          <el-input placeholder="输入关键词" v-model="form.keyword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">查找</el-button>
          <el-button @click="clear">清空</el-button>
        </el-form-item>
      </el-form>
      <h1 v-if="result.GET">this is result with chapter {{result.chapter}}, type {{result.type}} and keyword {{result.keyword}}</h1>
    </el-main>
  </div>
</template>

<script>
import {chapterInfo} from "@/store/question/chapters"
import {questionType} from "@/store/question/questionType"

export default {
  name: "questionBank",
  data(){
    return{
      chapters:chapterInfo,
      questionTypes:questionType,
      keyword:' ',
      form:{
        chapter:'',
        type:'',
        keyword:''
      },
      result:{
        GET:false,
        chapter:'',
        type:'',
        keyword:''
      }
    }
  },
  methods:{
    search(){
      this.result.GET=true
      this.result.chapter=this.form.chapter
      this.result.type=this.form.type
      this.result.keyword=this.form.keyword
    },
    clear(){
      this.form.chapter=''
      this.form.type=''
      this.form.keyword=''
    }
  }
}
</script>

<style scoped>

</style>