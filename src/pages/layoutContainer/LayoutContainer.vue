<template>
  <div class="layoutContainer">
    <el-container  class="el-container" id="mainWindow">
      <el-header class="header " style="height: 80px">
        <Header/>
      </el-header>

      <el-container id="withoutHeader">
        <el-aside style="width: 250px" class="aside">
          <Aside/>
        </el-aside>
        <el-main id="contentArea">
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
  mounted() {
    // <!--把window.onresize事件挂在到mounted函数上-->
    let fullHeight = document.documentElement.clientHeight;
    console.log("页面高度"+fullHeight);
    document.getElementById("mainWindow").style.height=fullHeight-1+"px"
    document.getElementById("contentArea").style.height=fullHeight-81+"px"
    window.onresize = () => {
      return (() => {
        let fullHeight = document.documentElement.clientHeight;
        console.log("页面高度"+fullHeight);
        let obj=document.getElementById("mainWindow")
        obj.style.height=fullHeight-1+"px"
        document.getElementById("contentArea").style.height=fullHeight-81+"px"
      })()
    };
  },
}
</script>

<style scoped>
.layoutContainer{
  background-color: #f0f2f5;
  width: 100%;
}

#mainWindow{
  overflow: hidden;
}

#contentArea{
  overflow: auto;
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
  margin-bottom: 80px;
  background-color: white;
}


</style>