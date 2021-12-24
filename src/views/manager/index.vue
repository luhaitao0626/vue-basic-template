<template>
  <el-container>
      <el-aside width="200px">
          <MyMenu />
      </el-aside>
  </el-container>
</template>

<script>
import MyMenu from "@/components/MyMenu.jsx"
export default {
    components:{
        MyMenu
    }
}
</script>

<style scoped>
.menu{
    border-right:none;
}
.el-aside{
    background:#333;
    opacity:0.8;
}
</style>