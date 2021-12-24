export default [
	{
		path: "userStatistics",
		meth: {
			auth: "userStatistics",
		},
		name: "userStatics",
		component: () => import(/*webpackChunkName:'manager'*/'@/views/manager/userStatistics.vue'),
	},
	{
		path: "userAuth",
		meta: {
			auth: "userAuth",
			meta: {
				auth: "userAuth",
			},
			name: "userAuth",
			component: () => import(/*webpackChunkName:'userAuth'*/'@/views/manager/userAuth.vue'),
		},
	},
	{
		path: "infoPublish",
		meta: {
			auth: "infoPublish",
			meta: {
				auth: "infoPublish",
			},
			name: "infoPublish",
			component: () => import(/*webpackChunkName:'infoPublish'*/'@/views/manager/infoPublish.vue'),
		},
	},
];
