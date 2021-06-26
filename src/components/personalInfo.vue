<template>
  <div class="infoContainer">
    <el-row :gutter="30">
      <el-col :span="12">
        <div class="infoBlockContainer ">

          <div style="margin-top: 20px">

            <el-row type="flex" class="el-row-personal-info">
              <el-col :span="6">
                <div>
                  <el-avatar :size="100" fit="fill" :src="userInfo.avatarUrl" style="border: 2px solid #eee"></el-avatar>
                </div>
              </el-col>
              <el-col :span="16" style="text-align: left">
                <div>
                  <el-row style="margin-bottom:10px ">
                    <div>姓名: {{ userInfo.name }}</div>
                  </el-row>
                  <el-row style="margin-bottom:10px ">
                    <div>学号: {{ userInfo.studentID }}</div>
                  </el-row>
                  <el-row style="margin-bottom:10px ">
                    <div>性别: {{ userInfo.sex }}</div>
                  </el-row>
                  <el-row style="margin-bottom:10px ">
                    <div>学校: {{ userInfo.school }}</div>
                  </el-row>
                  <el-row style="margin-bottom:10px ">
                    <div>邮箱: {{ userInfo.email }}</div>
                  </el-row>
                </div>

              </el-col>

            </el-row>


          </div>


        </div>
      </el-col>
      <el-col :span="12">
        <div class="infoBlockContainer ">



        </div>
      </el-col>
    </el-row>
    <el-row :gutter="30">
      <el-col :span="12">
        <div class="infoBlockContainer " style="height: 300px">
          <bar-chart type="barChart"></bar-chart>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="infoBlockContainer " style="height: 300px">
          <line-chart typeof="lineChart"></line-chart>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {userInfo} from "@/components/simulatedData";

import barChart from "@/components/echarts/barChart";
import BarChart from "@/components/echarts/barChart"; // 用户投资类型 柱状图
import lineChart from "@/components/echarts/lineChart";
// import pieChart from 'cps/echarts/pieChart' // 用户投资类型 饼状图
// import radarChart from 'cps/echarts/radarChart' // 用户投资类型 雷达图
// import lineChart from 'cps/echarts/lineChart' // 用户投资类型 折线图
export default {
  name: "personalInfo",
  components: {BarChart,lineChart},
  data() {
    return {

      userInfo: userInfo
    }

  },
  comments:{
    barChart

  }
}
</script>

<style scoped>
.infoContainer {


}

.el-row-personal-info {
  align-items: center;
  justify-content: space-between;
}

.el-row {
  margin-bottom: 20px;
}

.infoBlockContainer {
  height: 200px;
  min-width: 330px;
  padding: 10px 10px 10px 10px;
  background-color: #ffffff;


  border-radius: 5%;
}
</style>