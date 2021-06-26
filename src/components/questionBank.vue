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
    <div v-if="!result.GET" class="noResult">
      <img src="../assets/noResult.png" style="width: 300px">
      <h1>Oops... 没有找到相应题目！</h1>
    </div>
    <div v-if="result.GET">
      <template v-for="question in questions.questionList" >
        <div :key="question.id" @click="showQuestion(question.id)">
          <el-col  :sm="11" :xs="24" class="questionArea" >
            <p class="questionInfo">
              <b>题目编号：</b>{{question.id}}
              <el-divider direction="vertical"></el-divider>
              <b>所属章节：</b>{{question.chapterId}} {{question.chapterName}}
              <el-divider direction="vertical"></el-divider>
              <b>题目类型：</b>{{question.type!==1?question.type!==2?'简答题':'填空题':'选择题'}}
            </p>
            <p class="questionBody">
              {{question.body}}
            </p>
          </el-col></div>
      </template>
    </div>
  </div>
</template>

<script>
import {chapterInfo} from "@/store/question/chapters"
import {questionType} from "@/store/question/questionType"
import {questions} from "@/store/question/questions"
import {requestForQuestion} from "@/assets/Utils/requestAPI";

export default {
  name: "questionBank",
  data(){
    return{
      chapters:chapterInfo,
      questionTypes:questionType,
      questions: questions,
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
    },
    showQuestion(id){
      requestForQuestion(id)
      this.$router.push({name:"checkQuestion",
                        params:{questionId:id}})
    }
  }
}
</script>

<style scoped>

  .questionArea{
    margin: 10px 10px;
    padding: 5px;
    border-radius: 4px;
    background-color: white;
    transition: all .2s;
  }

  .questionArea:hover{
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    transition: all .2s;
    cursor: pointer;
  }

  .questionInfo{
    margin-top: 10px;
  }

  .questionBody{
    padding: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>