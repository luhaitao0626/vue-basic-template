export default [
	{
		path: "/reg",
		meta: {
			title: "注册",
		},
		component: () =>
			import(/* webpackChunkName: "reg" */ "@/views/user/Reg.vue"),
	},
	{
		path: "/login",
		// name: "login",
		meta: {
			title: "登录",
		},
		component: () =>
			import(/* webpackChunkName: "login" */ "@/views/user/Login.vue"),
	},

];
