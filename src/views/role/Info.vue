<template>
	<div>
		<van-form >
			<van-field
				v-model="selectedRole.name"
				name="角色名"
				label="角色名"
				placeholder="请填写角色名"
                readonly
			/>
			<van-field
				v-model="selectedRole.description"
				name="角色描述"
				label="角色描述"
				placeholder="请填写角色描述"
                readonly
			/>
		</van-form>
	</div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
let { mapState } = createNamespacedHelpers("role");
export default {
	computed:{
		...mapState(['selectedRole'])
	}
};
</script>

<style>
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
