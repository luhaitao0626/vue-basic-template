import * as types from "../action-types";
import * as utils from '@/utils/utils'
import * as user from "@/api/user.js";
import { getLocal, setLocal } from "../../utils/local";
import router from "@/router";
import per from "@/router/per.js";
const filterRouter = (authList) => { 
	let auths = authList.map((auth) => auth.auth);
	function filter(routes) {
		return routes.filter((route) => {
			if (auths.includes(route.meta.auth)) {
				if (route.children) {
					route.children = filter(route.children);
				}
				return route;
			}
		});
	}
	return filter(per);
};
export default {
	state: {
		userInfo: {},// 用户信息
		hasPermission: false,// 用户权限
		menuPermission: false,
	},
	mutations: {
		[types.SET_USER](state, userInfo) {
			state.userInfo = userInfo;
			if (userInfo && userInfo.token) {// token 存入local
				setLocal("token", userInfo.token);
			} else {
				localStorage.clear("token");
			}
		},
		[types.SET_PERMISSION](state, has) {
			state.hasPermission = has;
		},
		[types.SET_MENU_PERMISSION](state, has) {
			state.menuPermission = has;
		},
		[types.SET_USERS](state, payload) {
			state.users = payload.sort(utils.compare('number'));
		},
	},
	actions: {
		async [types.SET_USER]({ commit }, { payload, permission, menuPermission }) {
			commit(types.SET_USER, payload);
			commit(types.SET_PERMISSION, permission);
			commit(types.SET_MENU_PERMISSION, menuPermission);
		},
		async [types.USER_LOGIN]({ dispatch }, payload) {
			try {
				let result = await user.login(payload);
				dispatch(types.SET_USER, { payload: result.data, permission: true })
			} catch (e) {
				return Promise.reject(e);
			}
		},
		async [types.USER_VALIDATE]({ dispatch }, payload) {
			// 如果没token ，不用发请求了，肯定没登录
			if (!getLocal("token")) return false;
			try {
				let result = await user.validate();
				dispatch(types.SET_USER, { payload: result.data, permission: true })
				return true;
			} catch (e) {//验证失败了，就清空数据
				dispatch(types.SET_USER, { payload: {}, permission: false })
				return false;
			}
		},
		async [types.USER_LOGOUT]({ dispatch }) {
			dispatch(types.SET_USER, { payload: {}, permission: false });
		},
		async [types.ADD_ROUTE]({ commit, state }) {
			// 后端返回用户权限
			let authList = state.userInfo.authList;
			if (authList) {
				// 通过权限过滤出当前用户的路由
				let routes = filterRouter(authList);
				// 找到manager路由
				let route = router.options.routes.find(
					(item) => item.path == "/manager"
				);
				route.children = routes; // 给他添加子路由
				router.addRoutes([route]); // 动态添加进去
				commit(types.SET_MENU_PERMISSION, true); // 菜单权限设置完毕
			}
		},
		// 调用接口获取用户列表后，存在state中
		async [types.SET_USERS]({ commit }) {
			let { data } = await user.getUserList();
			commit(types.SET_USERS, data);
		},
		async [types.CREATE_USER]({ dispatch }, payload) {
			await user.createUser(payload);
			dispatch(types.SET_USERS);
		},
		async [types.UPDATE_USER]({ dispatch }, payload) {
			await user.updateUser(payload);
			dispatch(types.SET_USERS);
		},
		async [types.DELETE_USER]({ dispatch }, payload) {
			await user.deleteUser(payload);
			dispatch(types.SET_USERS);
		},
		// async [types.GET_USER_INFO]({ commit }, payload) {
		//     let result = await queryUser(payload);
		//     commit([types.GET_USER_INFO], result);
		// }
	},
};
