import config from './config/public';
import axios from '@/utils/request';
import { getLocal } from '../utils/local.js';

// 获取轮播图功能
export const getSlider = () => axios.get(config.getSlider);

export const getCaptcha = () => axios.get(config.getCaptcha, {
    params: {
        uid: getLocal('uuid')
    }
});
// 调用接口的方式： 1.在页面里调用    2.通过vuex 的action获取数据 用...mapActions
// 是否放到vuex 的评判方式：
//1.数据是全局的，放到vuex;   
//2.可以复用的也可以放到vuex中   
//3.作缓存（切换页面时，如果有就不用重复请求）