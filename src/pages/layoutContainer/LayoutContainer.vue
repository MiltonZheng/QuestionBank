<template>
  <div class="layoutContainer">
    <el-container  class="el-container">
      <el-header class="header " style="height: 80px">
        <Header/>
      </el-header>
      <el-container>

        <el-aside style="height: 100%;width: 250px" class="aside">
          <Aside/>
        </el-aside>
        <el-main>
          <MainContainer/>
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<script>
import MainContainer from "@/pages/layoutContainer/MainContainer";
import Aside from "@/pages/layoutContainer/Aside";
import Header from "@/pages/layoutContainer/Header";
export default {
  name: "LayoutContainer",
  components: {Header, MainContainer, Aside},
}
</script>

<style scoped>
.layoutContainer{
  background-color: #f0f2f5;
  height: 100%;
  width: 100%;
}
.el-container{
  height: 100%;
}

.el-aside{
  height: 100%;
}

.header{
  background-color: white;
  height: 80px;
  padding: 0;
}

.aside{

}

.el-main{
}
</style>