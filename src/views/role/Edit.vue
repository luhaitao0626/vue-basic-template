<template>
	<div>
		<van-form @submit="onSubmit" v-model="selectedRole">
			<van-field
				v-model="selectedRole.name"
				name="name"
				label="角色名"
				placeholder="请填写角色名"
				:rules="[{ required: true, message: '请填写正确的角色名称' }]"
			/>
			<van-field
				v-model="selectedRole.description"
				name="description"
				label="角色描述"
				placeholder="请填写角色描述信息"
				:rules="[{ required: true, message: '请填写正确的角色描述信息' }]"
			/>
			<div style="margin: 16px;">
				<van-button
					round
					block
					type="info"
					native-type="submit"
					>确定修改</van-button
				>
			</div>
		</van-form>
	</div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex';
let {mapActions,mapState} = createNamespacedHelpers('role');
import * as types from "../../store/action-types";
export default {
	computed: {
		...mapState(['selectedRole'])
	},
	methods: {
		...mapActions([types.UPDATE_ROLE]),
		async onSubmit(){
			console.log(this.selectedRole)
			await this[types.UPDATE_ROLE](this.selectedRole);
			this.$router.go(-1);
		}
	},
	mounted(){
		console.log(this.selectedRole)

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
