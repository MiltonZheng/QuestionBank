<template>
  <div class="asideContainer">
    <el-menu
        :default-active="activeIndex"
        class="el-menu-vertical-demo "
        @open="handleOpen"
        @close="handleClose"
        @select="select"
        text-color="#fff"
        active-text-color="#abcdef"
        router
        >
      <!--router属性可以直接将menu-item的index映射成router的path-->
      <template v-for="index in menu" >
        <el-col v-bind:class="index.id!==activeIndex?'':'main-backgroundColor'" :key="index.id" :xs="8">
          <el-menu-item :index="index.id" :key="index.id" class="menuItem"
                        v-bind:style="index.id!==activeIndex?'':'color: #ffffff'">
            <template slot="title">
              <!--<i :class="index.icon"></i>-->
              <el-icon :class="index.icon"></el-icon>
              <span slot="title" :class="activeIndex!==index.id?'inactiveWord':'activeWord'">{{ index.name }}</span>
              <div class="asideSelectedDivider" v-bind:style="activeIndex!==index.id?'background-color:inherit':'background-color:#ffffff'" ></div>
            </template>
          </el-menu-item>
        </el-col>



      </template>
    </el-menu>
  </div>
</template>

<script>
import {menu} from "@/pages/layoutContainer/menu";
import 'element-ui/lib/theme-chalk/display.css';

export default {
  name: "Aside",
  data: function () {
    return {
      menu: menu,
      activeIndex:"generalCourse"
    }

  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    select(index) {
      console.log(1)
      this.activeIndex=index
      console.log(2)
   }
  }
}


</script>

<style scoped>
.asideContainer {
  height: 100%;
}
.asideSelectedDivider{
  height: 80%;
  width: 2px;
  background-color:inherit;
}
.menuItem{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;

}

.el-menu-item:hover{
  background-color: lightgrey;
}

.el-menu-item:focus{
  background-color: transparent;
}

@media screen and (max-width: 768px) {
  .asideContainer {
    width:100%
  }
}


</style>