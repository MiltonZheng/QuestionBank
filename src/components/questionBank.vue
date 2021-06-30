<template>
  <div>
    <div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item >题库</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/mainPage/subject' }">选择科目</el-breadcrumb-item>
        <el-breadcrumb-item><a href="#">题库</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-main>
      <el-form rel="form" :inline="true">
        <el-form-item label="难度">
          <el-select v-model="form.difficulty" placeholder="请选择">
            <el-option
                :key="0"
                :label="'不限'"
                :value="0">
            </el-option>
            <el-option
                v-for="(item,index) in difficulty"
                :key="index+1"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="习题类型">
          <el-select v-model="form.type" placeholder="请选择">
            <el-option
                v-for="(item,index) in questionType"
                :key="index"
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
      <h1 v-if="result.GET">this is result with difficulty {{result.difficulty}}, type {{result.type}} and keyword {{result.keyword}}</h1>
    </el-main>
    <div v-if="!result.GET" class="noResult">
      <img src="../assets/noResult.png" style="width: 300px">
      <h1>Oops... 没有找到相应题目！</h1>
    </div>
    <div v-if="result.GET">
      <template v-for="(question,index) in displayQuestions" >
        <div :key="question.id" @click="showQuestion(index)">
          <el-col  :sm="12" :xs="24" >
            <div class="questionArea">
              <p class="questionInfo">
                <b>题目编号：</b>{{question.id}}
                <el-divider direction="vertical"></el-divider>
                <b>难度：</b>{{question.difficulty}}
                <el-divider direction="vertical"></el-divider>
                <b>题目类型：</b>{{question.type!=='pro_choice'?question.type!=='pro_completion'?'简答题':'填空题':'选择题'}}
              </p>
              <p class="questionBody">
                {{question.body}}
              </p>
            </div>
          </el-col>
        </div>
      </template>
      <el-col class="pagination">
        <el-pagination
            @current-change="handleCurrentChange"
            background
            layout="prev, pager, next"
            :total="questionNum"
            :page-size="10"
            :current-page.sync="currPage">
        </el-pagination>
      </el-col>
    </div>


    <el-popover
      ref="popover"
      placement="left"
      width="200"
      trigger="hover"
      content="创建题目">
    </el-popover>
    <el-button v-popover:popover circle id="addBtn" type="primary" icon="el-icon-plus" @click="addQuestion">

    </el-button>
  </div>
</template>

<script>
import {difficulty} from "@/components/simulatedData"
import {questionType} from "@/components/simulatedData"
import {questions} from "@/components/simulatedData"

export default {
  name: "questionBank",
  data(){
    return{
      difficulty:difficulty,
      questionType:questionType,
      questions: questions,
      keyword:' ',
      questionNum: questions.questionList.length,
      displayQuestions: questions.questionList.slice(0,10),
      currPage: 1,
      form:{
        difficulty:'',
        type:'',
        keyword:''
      },
      result:{
        GET:false,
        difficulty:'',
        type:'',
        keyword:''
      }
    }
  },
  methods:{
    search(){
      this.result.GET=true
      this.result.difficulty=this.form.difficulty
      this.result.type=this.form.type
      this.result.keyword=this.form.keyword
    },
    clear(){
      this.form.chapter=''
      this.form.type=''
      this.form.keyword=''
    },
    showQuestion(index){
      console.log(index)
      questions.curr=(this.currPage-1)*10+index
      console.log(questions.curr)
      this.$router.push("/mainPage/checkQuestion")
    },
    addQuestion(){
      this.$router.push("/mainPage/addQuestion")
    },
    handleCurrentChange(){
      //console.log(this.questionNum)
      //console.log(this.currPage)
      this.displayQuestions=questions.questionList.slice((this.currPage-1)*10,this.currPage*10)
    },
  }
}
</script>

<style scoped>
  .questionArea{
    margin: 10px;
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
  #addBtn{
    position: absolute;
    right: 20px;
    bottom: 20px;
    height: 50px;
    width: 50px;
  }

  #addBtn:hover{
    -webkit-transform: rotate(45deg);
  }
  .pagination{
    position: relative;
  }
</style>