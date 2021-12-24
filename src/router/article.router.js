export default [
    {
        path: "/post",
        name: 'post',
        component: () =>
            import(/* webpackChunkName: "article" */ "@/views/article/Post.vue"),
        meta: {
            needLogin:true
        },
    },
];
