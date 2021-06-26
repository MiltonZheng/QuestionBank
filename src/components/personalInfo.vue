<template>
  <div class="infoContainer">

    <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="头像" :label-width="formLabelWidth">

          <el-upload
              ref="uploadImage"
              action="#"
              :multiple="false"
              :file-list="fileList"
              list-type="picture-card"

              :before-upload="beforeUpload"
              :on-exceed="addressExceed"
              :on-preview="onPreview"
              :on-change="changeUpload"

              :auto-upload="false">
            <i slot="default" class="el-icon-plus"></i>
          </el-upload>


        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" :placeholder="userInfo.name"></el-input>
        </el-form-item>
        <el-form-item label="学号" :label-width="formLabelWidth">
          <el-input v-model="form.studentID" autocomplete="off" :placeholder="userInfo.studentID"></el-input>
        </el-form-item>
        <el-form-item label="班级" :label-width="formLabelWidth">
          <el-input v-model="form.class" autocomplete="off" :placeholder="userInfo.class"></el-input>
        </el-form-item>
        <el-form-item label="学校" :label-width="formLabelWidth">
          <el-input v-model="form.school" autocomplete="off" :placeholder="userInfo.school"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth" style="text-align: left">
          <template>
            <el-radio v-model="form.sex" label="男" size="medium">男</el-radio>
            <el-radio v-model="form.sex" label="女" size="medium">女</el-radio>
          </template>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editCancel">取 消</el-button>
        <el-button type="primary" @click="editSubmit">确 定</el-button>
      </div>
    </el-dialog>


    <el-row :gutter="30">
      <el-col :span="12">
        <div class="infoBlockContainer ">

          <div style="margin-top: 20px">

            <el-row type="flex" class="el-row-personal-info">
              <el-col :span="6">
                <div>
                  <el-avatar :size="100" fit="fill" :src="userInfo.avatarUrl"
                             style="border: 2px solid #eee"></el-avatar>
                </div>
              </el-col>
              <el-col :span="12" style="text-align: left">
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
                    <div>班级: {{ userInfo.class }}</div>
                  </el-row>
                  <el-row style="margin-bottom:10px ">
                    <div>学校: {{ userInfo.school }}</div>
                  </el-row>

                </div>

              </el-col>
              <el-col :span="4">
                <el-image :src="editImage" @click="setDialog" class="editImage"></el-image>
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
import editImage from "@/assets/editinfo.png"
// import pieChart from 'cps/echarts/pieChart' // 用户投资类型 饼状图
// import radarChart from 'cps/echarts/radarChart' // 用户投资类型 雷达图
// import lineChart from 'cps/echarts/lineChart' // 用户投资类型 折线图
export default {
  name: "personalInfo",
  imageUrl: userInfo.avatarUrl,
  components: {BarChart, lineChart},
  data() {
    return {
      editImage: editImage,
      userInfo: userInfo,
      dialogVisible: false,
      disabled: false,
      fileList: [{name: 'avatar.jpeg', url: userInfo.avatarUrl}],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        studentID: '',
        class: '',
        school: '',
        sex: userInfo.sex,
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'

    }

  },
  methods: {
    setDialog() {
      this.dialogFormVisible = true
    },
    editCancel() {
      /****清空*****/
      this.form = {
        name: '',
        studentID: '',
        class: '',
        school: '',
        sex: userInfo.sex,
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
      this.fileList=[{name: 'avatar.jpeg', url: userInfo.avatarUrl}],
      this.dialogFormVisible = false
    },
    editSubmit() {

      /**********发送网络请求***********/
      this.$refs.uploadImage.submit()/**提交图像*/


      /******请求结束，异步任务结束*****/
      /****清空*****/
      this.form = {
        name: '',
        studentID: '',
        class: '',
        school: '',
        sex: userInfo.sex,
      }
      /**********close window***********/
      this.dialogFormVisible = false
    }, handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },

    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    addressExceed(files,fileList){
      this.fileList.pop()
      this.fileList.push(files[0])
      console.log(files)
      console.log(fileList)
    },
    changeUpload(file)
    {

      this.fileList.pop()
      this.fileList.push(file)


    },
    onPreview(file)
    {
      console.log(file)
    },
    beforeUpload(file)
    {
      console.log(file)
    }




  },
  comments: {
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

.editImage {
  transition: width 2s;
}

/*.editImage:hover{*/
/*  box-shadow: 20px 2px 2px  #00ff00;*/
/*}*/

.infoBlockContainer {
  height: 200px;
  min-width: 330px;
  padding: 10px 10px 10px 10px;
  background-color: #ffffff;
  box-shadow: 12px 12px 5px #eee;


  border-radius: 5%;
}
</style>