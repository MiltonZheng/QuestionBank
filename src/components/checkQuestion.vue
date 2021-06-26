<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item >题库</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/mainPage/subject' }">选择科目</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/mainPage/questionBank' }">题库</el-breadcrumb-item>
      <el-breadcrumb-item>题目{{currQuestion.id}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="questionContent">
      <!--基础信息，后续修改-->
      <el-row class="basicInfo">
        <el-col>

        </el-col>
        <el-col :span="8">
          <span><b>习题编号</b> {{currQuestion.id}}</span>
        </el-col>
        <el-col :span="8">
          <span><b>章节信息</b> {{currQuestion.chapterId+" "+currQuestion.chapterName}}</span>
        </el-col>
        <el-col :span="8">
          <span><b>题目类型</b> {{currQuestion.type!==1?currQuestion.type!==2?'简答题':'填空题':'选择题'}}</span>
        </el-col>
      </el-row>
      <el-row>
        <!--暂未添加不同题型的处理方式-->
        <el-col class="questionBody" :span="24">
          <h1>题目内容</h1><br>
          {{currQuestion.body}}
        </el-col>
        <el-col class="questionAnswer">
          <h1>题目答案：</h1><br>
          {{currQuestion.answer}}
        </el-col>
      </el-row>
      <el-row class="manipulation">
        <div class="hidden-xs-only">
          <el-button icon="el-icon-check" type="success" >加入组卷</el-button>
          <el-button icon="el-icon-edit" type="primary">编辑</el-button>
          <el-button icon="el-icon-delete" type="danger" @click="deleteQuestion(currQuestion.id)">删除</el-button>
        </div>
        <div class="hidden-sm-and-up">
          <el-button icon="el-icon-check" type="success" circle></el-button>
          <el-button icon="el-icon-edit" type="primary" circle></el-button>
          <el-button icon="el-icon-delete" type="danger" @click="deleteQuestion(currQuestion.id)" circle></el-button>
        </div>

      </el-row>
    </div>
  </div>
</template>

<script>
import {questions} from "@/store/question/questions";
import {currQuestion} from "@/store/question/currQuestion";
import 'element-ui/lib/theme-chalk/display.css';//按钮响应式布局

export default {
  name: "checkQuestion",
  questions:questions,
  data(){
    return{
      currQuestion:currQuestion,
    }
  },
  methods:{
    deleteQuestion(id){
      console.log("删除"+id);
      this.$confirm('此操作将永久删除该问题, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        //此处需要调用删除函数
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  }
}
</script>

<style scoped>
.questionContent{
  background-color: white;
  padding: 10px;
  margin-top: 10px;
}
.basicInfo{
  padding: 10px;
  font-size: large;
}
.questionBody{
  padding: 10px 50px;
  text-align: left;
}
.questionAnswer{
  padding: 20px 50px;
  text-align: left;
}
.manipulation{
  margin-bottom: 10px;
}
</style>