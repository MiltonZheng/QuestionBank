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
        <div v-for="Item in subjects" :key="Item.courseId">
          <el-col :span="12">
            <div :key="Item.courseId" class="courseItem selectedCourseItem"
                 @mouseover="handleMouseOver($event)"
                 @mouseleave="handleMouseLeave($event)"
                 @click="jumpToQuestion(Item.courseId)"
            >
              <div class="recruit-list-link" >
                <h4 class="courseTitle">{{ Item.courseName }}(--{{ Item.courseType }})</h4>
                <p class="recruit-tips">
                  <span>课时:{{ Item.courseHours }}</span>
                  <el-divider direction="vertical"></el-divider>
                  <span>容量:{{ Item.capacity }}</span>
                  <el-divider direction="vertical"></el-divider>
                  <span>学分:{{ Item.courseCredit }}</span>
                  <el-divider direction="vertical"></el-divider>
                  <span>周次:{{ Item.courseWeek }}</span>
                  <el-divider direction="vertical"></el-divider>
                  <span>地点:{{ Item.courseLocation }}</span>
                </p>
                <p class="recruit-text">
                  教师：{{ Item.courseCollege }}-{{ Item.teacherName }}-{{ Item.teacherTitle }};
                </p>
              </div>

            </div>
          </el-col>

        </div>
      </el-row>
    </el-main>
  </div>
</template>

<script>
import {SimulatedData} from "@/components/simulatedData"

export default {
  name: "subject",
  data(){
    return{
      subjects: SimulatedData,
      subject: '',
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
                          params: {courseId: id}})
    }
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