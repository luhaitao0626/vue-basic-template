<template>
  <div>
    <van-form @submit="onSubmit" v-model="role">
      <van-field
        v-model="role.name"
        name="name"
        label="角色名"
        placeholder="请填写角色名"
        :rules="[{ required: true, message: '请填写正确的角色名称' }]"
      />
      <van-field
        v-model="role.description"
        name="description"
        label="角色描述"
        placeholder="请填写角色描述信息"
        :rules="[{ required: true, message: '请填写正确的角色描述信息' }]"
      />
      <!-- <van-field name="slider" label="角色权重">
				<template #input>
					<van-slider v-model="roleWeight" active-color="#ee0a24">
						<template #button>
							<div class="custom-button">{{ roleWeight }}</div>
						</template>
					</van-slider>
				</template>
			</van-field> -->
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >确定添加</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
let { mapActions } = createNamespacedHelpers("role");
import * as types from "../../store/action-types";
export default {
  data() {
    return {
      role: {
        name: "",
        description: "",
      },
    };
  },
  methods: {
    ...mapActions([types.ADD_ROLE]),
    async onSubmit() {
      await this[types.ADD_ROLE](this.role);
      this.$router.go(-1)
    },
  },
};
</script>

<style>
/* .van-field {
  margin-top: 10px;
} */

.custom-button {
  width: 26px;
  color: #fff;
  font-size: 10px;
  line-height: 18px;
  text-align: center;
  background-color: #ee0a24;
  border-radius: 100px;
}
</style>
