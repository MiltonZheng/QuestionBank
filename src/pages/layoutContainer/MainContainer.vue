<template>
  <div class="wrapperMain">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "MainContainer"
}
</script>

<style scoped>


.wrapperMain {
  height: 100%;
  width: 100%;
}
</style>