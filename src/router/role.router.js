export default [
  {
    path: '/role/list',
    name: 'RoleList',
    meta: {
      title: "角色管理",
    },
    component: () => import(/* webpackChunkName: "roleList" */ '@/views/role/List.vue')
  },
  {
    path: '/role/add',
    name: 'AddRole',
    meta: {
      title: "创建角色",
    },
    component: () => import(/* webpackChunkName: "addRole" */ '@/views/role/Add.vue')
  },
  {
    path: '/role/edit',
    name: 'EditRole',
    meta: {
      title: "修改角色",
    },
    component: () => import(/* webpackChunkName: "editRole" */ '@/views/role/Edit.vue')
  },
  {
    path: '/role/info',
    name: 'RoleInfo',
    meta: {
      title: "角色信息",
    },
    component: () => import(/* webpackChunkName: "editRole" */ '@/views/role/Info.vue')
  },
];
