<template>
  <div>
    <div>
      <el-breadcrumb separator="/" >
        <el-breadcrumb-item >题库</el-breadcrumb-item>
        <el-breadcrumb-item><a href="#">选择科目</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-main>
      <el-row type="flex" justify="end">
        <el-col :span="12" >
          <el-input
              placeholder="查找课程"
              v-model="subject">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input></el-col>
      </el-row>
      <el-row>
        <div v-for="(Item,index) in subjects" :key="index">
          <el-col :md="12" :sm="24" >
            <div  class="courseItem selectedCourseItem"
                 @mouseover="handleMouseOver($event)"
                 @mouseleave="handleMouseLeave($event)"
                 @click="jumpToQuestion(index)"
            >
              <div class="recruit-list-link" >
                <h4 class="courseTitle">{{ Item.courseName }}</h4>
              </div>
            </div>
          </el-col>
        </div>
      </el-row>

      <el-pagination
          @current-change="handleCurrentChange"
          background
          layout="prev, pager, next"
          :total="subjectNum"
          :page-size="10"
          :current-page.sync="currPage">
      </el-pagination>
    </el-main>
  </div>
</template>

<script>
import {SimulatedData} from "@/components/simulatedData"

export default {
  name: "subject",
  data(){
    return{
      subjectNum: SimulatedData.length,
      subjects: SimulatedData.slice(0,10),
      subject: '',
      currPage: 0
    }
  },
  methods:{
    handleMouseOver: function (event) {
      var currentDom = event.currentTarget
      currentDom.setAttribute("class", "courseItemActive selectedCourseItemActive")
    },
    handleMouseLeave: function (event) {
      var currentDom = event.currentTarget
      currentDom.setAttribute("class", "courseItem selectedCourseItem")
    },
    jumpToQuestion(id){
      this.$router.push({name: "questionBank",
                          params: {subjectId: id}})
    },
    handleCurrentChange(){
      console.log(this.subjectNum)
      console.log(this.currPage)
      this.subjects=SimulatedData.slice((this.currPage-1)*10,this.currPage*10)
    },
  }
}
</script>

<style scoped>
.searchRow{
  display: flex;
}

.searchSubject{
  float: right;
}


</style>