import store from "../store";
import * as types from "../store/action-types";

// 登录权限校验
const loginPermission = async function(to, from, next) {
	let r = await store.dispatch(`user/${types.USER_VALIDATE}`);
	let needLogin = to.matched.some((item) => item.meta.needLogin);
	if (!store.state.user.hasPermission) {
		// 没登录 但是访问这个页面需要登录
		if (needLogin) {
			if (r) {
				next(); // 需要登录，并且登陆过了，继续即可
			} else {
				next("/login");
			}
		} else {
			// 没登录也不需要权限
			next();
		}
	} else {
		if (to.path === "login") {//已经登陆过还访问登录页，则直接跳转到主页
			next("/");
		} else {// 登陆过如果访问的是其他页，就放行
			next();
		}
	}
	next();
};

// 退回到登录页后，清空用户数据以及权限
const logout = async function (to, from, next) {
	console.log(from);
	console.log(to);
	if (to.path === "/login" || to.path === "/") {
		await store.dispatch(`user/${types.SET_USER}`, {
			userInfo: {},
			hasPermission: false,
			menuPermission: false,
		});
	}
	next();
};

// 菜单权限校验  路由权限动态添加
export const menuPermission  = async function(to,from,next){
    if(store.state.user.hasPermission){
        if(!store.state.user.menuPermission){
            // 添加好了
            store.dispatch(`user/${types.ADD_ROUTE}`); // 路由组建都是异步加载的import()
            // replaceState // 再跳一次，不计入到浏览器路由历史
            next({...to,replace:true}) // 路由是异步加载的，还没加进去，是404；

        }
        next()
    }
    next()
}

export const setMenuTitle = async function (to, from, next) {
	store.commit(types.SET_TITLE, to.meta.title);
	next();
};

export const createWebsocket = async function (to, from, next) {
	// 如果登陆了，但是没有创建websocket
	if (store.state.user.hasPermission && !store.state.ws) {
		store.dispatch(`${types.CREATE_WEBSOCKET}`)
		next();
	} else {
		next();
	}
};

export default {
	loginPermission,
	logout,
	setMenuTitle,
	menuPermission,
	createWebsocket,
};
