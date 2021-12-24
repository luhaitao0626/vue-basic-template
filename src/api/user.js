import config from "./config/user";
import axios from "@/utils/request";

// 注册
export const reg = (params) => axios.post(config.reg, params);

// 获取用户功能
export const login = (params) => axios.post(config.login, params);

// 校验用户是否登录，如果登录，获取最新信息(jwt token) 更新用户
export const validate = () => axios.get(config.validate);

export const getUserList = () => axios.get(config.getUserList);

export const createUser = (params) => axios.post(config.createUser, params);

export const updateUser = (params) => axios.post(config.updateUser, params);

export const deleteUser = (parmas) => axios.post(config.deleteUser, parmas);

export const getUserInfo = (parmas) => axios.get(config.getUserInfo, parmas);

export const joinTeam = (params) => axios.post(config.joinTeam, params);
export const markShow = ({ showId, teamId, scorePointId, userId, score }) =>
	axios.get(
		`${config.markShow}/${showId}/${teamId}/${scorePointId}/${userId}/${score}`
	);
export const getParticipatedShowByUserId = (params) => axios.post(config.getParticipatedShowByUserId + "/" + params);

export const autoCreateShowUser = (params) => axios.post(config.autoCreateShowUser, params);


// 调用接口的方式： 1.在页面里调用    2.通过vuex 的action获取数据 用...mapActions
// 是否放到vuex 的评判方式：1.数据是全局的，放到vuex;   2.可以复用的也可以放到vuex中   3.作缓存
