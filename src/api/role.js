import config from './config/role';
import axios from '@/utils/request';

export const getRoleList = () => axios.get(config.getRoleList);

export const addRole = (params) => axios.post(config.addRole, params)

export const updateRole = (params) => axios.post(config.updateRole, params)

export const deleleRole = (params) => axios.post(config.deleteRole, params)

export const getRoleInfo = (params) => axios.get(config.getRoleInfo, params)

// 调用接口的方式： 1.在页面里调用    2.通过vuex 的action获取数据 用...mapActions
// 是否放到vuex 的评判方式：1.数据是全局的，放到vuex;   2.可以复用的也可以放到vuex中   3.作缓存