<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item >题库</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/mainPage/subject' }">选择科目</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/mainPage/questionBank' }">题库</el-breadcrumb-item>
      <el-breadcrumb-item>题目{{questionList[questions.curr].id}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="questionContent">
      <!--基础信息，后续修改-->
      <el-row class="basicInfo">
        <el-col>

        </el-col>
        <el-col :span="8">
          <span><b>习题编号</b> {{questionList[questions.curr].id}}</span>
        </el-col>
        <el-col :span="8">
          <span><b>难度</b> {{questionList[questions.curr].difficulty}}</span>
        </el-col>
        <el-col :span="8">
          <span>
            <b>题目类型</b>
            {{questionList[questions.curr].type!=='pro_choice'?questionList[questions.curr].type!=='pro_completion'?'简答题':'填空题':'选择题'}}
          </span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :md="1" :sm="2" :xs="2" class="turnPage" id="turnLeft" title="上一题">
          <el-image :src="turnLeft" class="turnBtn" @click="lastQuestion"></el-image>
        </el-col>
        <el-col :md="22" :sm="20" :xs="20"><el-row>
          <!--不同题型的处理方式-->
          <el-col class="questionBody" :span="24">
            <h1>题目内容</h1><br>
            {{questionList[questions.curr].body}}
          </el-col>
          <!--选择题，暂时只考虑四个选项-->
          <el-col v-if="questionList[questions.curr].type==='pro_choice'" class="choices">
            <table class="el-table">
              <tr>
                <th>选项</th>
                <th>内容</th>
              </tr>
              <tr class="main-backgroundColorLevel4">
                <td>A</td>
                <td>{{questionList[questions.curr].A}}</td>
              </tr>
              <tr>
                <td>B</td>
                <td>{{questionList[questions.curr].B}}</td>
              </tr>
              <tr class="main-backgroundColorLevel4">
                <td>C</td>
                <td>{{questionList[questions.curr].C}}</td>
              </tr>
              <tr>
                <td>D</td>
                <td>{{questionList[questions.curr].D}}</td>
              </tr>
            </table>
          </el-col>

          <el-col >

          </el-col>

          <el-col v-if="questionList[questions.curr].type!=='pro_completion'" class="questionAnswer">
            <h1>题目答案：</h1><br>
            {{questionList[questions.curr].answer[0]}}
          </el-col>
          <!--填空题-->
          <el-col v-if="questionList[questions.curr].type==='pro_completion'" class="questionAnswer">
            <h1>题目答案：</h1><br>
            <template v-for="(answer,index) in questionList[questions.curr].answer">
              <p :key="index">
                {{answer}}
              </p>
            </template>
          </el-col>
        </el-row>
        </el-col>
        <el-col :md="1" :sm="2" :xs="2" class="turnPage" id="turnRight" title="下一题">
          <el-image :src="turnRight" @click="nextQuestion" class="turnBtn" ></el-image>
        </el-col>
      </el-row>

      <el-row class="manipulation">
        <div class="hidden-xs-only">
          <el-button icon="el-icon-check" type="success" >加入组卷</el-button>
          <el-button icon="el-icon-edit" type="primary" @click="setDialog">编辑</el-button>
          <el-button icon="el-icon-delete" type="danger" @click="deleteQuestion(questionList[questions.curr].id)">删除</el-button>
        </div>
        <div class="hidden-sm-and-up">
          <el-button icon="el-icon-check" type="success" circle></el-button>
          <el-button icon="el-icon-edit" type="primary" circle @click="setDialog"></el-button>
          <el-button icon="el-icon-delete" type="danger" @click="deleteQuestion(questionList[questions.curr].id)" circle></el-button>
        </div>

      </el-row>
    </div>

    <el-dialog title="编辑题目" :visible.sync="dialogFormVisible">
      <el-form v-model="form">
        <el-form-item label="题目编号" :label-width="formLabelWidth">
          <el-input autocomplete="off"
                    :placeholder="currQuestion.id"></el-input>
        </el-form-item>
        <el-form-item label="题型" :label-width="formLabelWidth">
          <el-input autocomplete="off"
                    :placeholder="currQuestion.type!=='pro_choice'?currQuestion.type!=='pro_completion'?'简答题':'填空题':'选择题'"></el-input>
        </el-form-item>
        <el-form-item label="难度" :label-width="formLabelWidth">
          <el-select v-model="form.difficulty" >
            <el-option
                v-for="(item,index) in difficulty"
                :key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="题干" :label-width="formLabelWidth">
          <el-input id="editBody" v-model="form.body" type="textarea"  :placeholder="questionList[questions.curr].body"></el-input>
        </el-form-item>
        <div v-if="questionList[questions.curr].type==='pro_choice'">
          <el-form-item label="选项A" :label-width="formLabelWidth">
            <el-input id="editA" v-model="form.A" autocomplete="off" :placeholder="questionList[questions.curr].A"></el-input>
          </el-form-item>
        </div>
        <el-form-item label="答案" :label-width="formLabelWidth">
          <el-input id="editAnswer" v-model="form.answer" autocomplete="off" :placeholder="questionList[questions.curr].answer"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editCancel">取 消</el-button>
        <el-button type="primary" @click="editSubmit">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import {questions} from "@/components/simulatedData";
import {difficulty} from "@/components/simulatedData"
import 'element-ui/lib/theme-chalk/display.css';
import turnLeft from "@/assets/turnLeft.png"
import turnRight from "@/assets/turnRight.png"
//按钮响应式布局

export default {
  name: "checkQuestion",
  data(){
    return{
      questions:questions,
      questionList:questions.questionList,
      currQuestion:questions.questionList[questions.curr],
      currType:questions.questionList[questions.curr].type,
      difficulty:difficulty,
      form:{
        body:'',
        answer:'',
        difficulty:'',
        A:'',
        B:'',
        C:'',
        D:''
      },

      turnLeft: turnLeft,
      turnRight: turnRight,

      dialogFormVisible: false,
      formLabelWidth: '120px',


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
    },
    setDialog() {
      this.dialogFormVisible = true
      let curr=this.questions[questions.curr]
      this.form['difficulty']=curr['difficulty']
      this.form['body']=curr['body']
      this.editedQuestion['answer']=curr['answer']
      document.getElementById("editBody").value=this.questionList[questions.curr].body
      let choices=['A','B','C','D']
      if(curr.type===1){
        console.log("选择题")
        for(let choice in choices){
          this.editedQuestion[choice]=curr[choice]
        }
      }else {
        //delete editedQuestion['A']
      }
      console.log(this.editedQuestion)
    },
    editCancel() {
      this.$confirm('取消后你的修改不会被保存，确认继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        //此处需要调用删除函数
        this.dialogFormVisible=false;
        this.$message({
          type: 'success',
          message: '取消成功!'
        });
      }).catch(() => {
      });
    },
    editSubmit() {
      this.$confirm('确定提交吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        //此处需要调用提交函数
        this.dialogFormVisible=false;
        this.$message({
          type: 'success',
          message: '提交成功!'
        });
      }).catch(() => {
      });
    },
    nextQuestion(){
      //console.log(questions.curr)
      if(questions.curr===questions.questionList.length-1){
        this.$message({
          message: '这是最后一题了哦！',
          type: 'warning'
        });
      }else {
        questions.curr++
      }
    },
    lastQuestion(){
      //console.log(questions.curr)
      if(questions.curr===0){
        this.$message({
          message:'前面没有题啦！',
          type: 'warning'
        })
      }else {
        questions.curr--
      }
    },
  },
  mounted() {
    console.log("change current question")
    this.currQuestion=questions.questionList[questions.curr]
  },
}
</script>

<style scoped>
.questionContent{
  background-color: white;
  padding: 10px;
  margin-top: 10px;
}
.basicInfo{
  padding: 20px 0 10px 0;
  font-size: large;
}
.questionBody{
  padding: 10px 10px;
  text-align: left;
}
.questionAnswer{
  padding: 20px 10px;
  text-align: left;
}
.choices{
  padding: 20px 10px;
}
.manipulation{
  margin-bottom: 10px;
}
td, th{
  text-align: center;
}
.turnPage{
  vertical-align: middle;
  margin-top: 100px;
}
.turnPage:hover{
  cursor: pointer;
}


</style>