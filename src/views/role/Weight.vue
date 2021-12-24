<template>
  <div>
    <van-nav-bar title="权重配置" />
    <!-- <div class="logo">Logo</div> -->
    <van-form @submit="onSubmit" class="middle">
      <van-field name="slider" label="角色0权重">
        <template #input>
          <van-slider v-model="slider" />
        </template>
      </van-field>
      <van-field name="slider" label="角色1权重">
        <template #input>
          <van-slider v-model="slider" />
        </template>
      </van-field>
      <van-field name="slider" label="角色2权重">
        <template #input>
          <van-slider v-model="slider" />
        </template>
      </van-field>
      <van-field name="slider" label="角色3权重">
        <template #input>
          <van-slider v-model="slider" />
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>
  
<script>
export default {
  name: "Weight",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.middle {
  margin-top: 30px;
}
.logo {
  text-align: center;
  vertical-align: middle;
}
</style>
