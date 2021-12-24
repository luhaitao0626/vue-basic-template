<template>
  <div>
    首页
    <el-carousel :interval="4000" type="card" height="360px">
      <el-carousel-item v-for="item in sliders" :key="item._id">
        <img :src="item.url" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import * as types from "@/store/action-types";
export default {
  methods: {
    ...mapState(["sliders"]),
    ...mapActions([types.SET_SLIDERS]),
  },
  mounted() {
    if (!this.sliders.length) {
      this[types.SET_SLIDERS]();
    }
  },
};
</script>

<style>
</style>