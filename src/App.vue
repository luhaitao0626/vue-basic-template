<template>
  <div id="app">
    <el-container>
      <el-header>
        <PageHeader />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <PageFooter />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
export default {
  name: "App",
  components: { PageHeader, PageFooter },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.el-header {
  background: #333;
}
.el-footer {
  background: #333;
}
.el-main {
  min-height: calc(100vh - 120px);
}
</style>
