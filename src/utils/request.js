// 对axios 的二次封装
import axios from 'axios'
import config from '@/config/index'
import { getLocal } from '@/utils/local'
const timeout = 3000;
class HttpRequest {
    constructor() {
        this.baseURL = config.baseURL;
        this.timeout = timeout;
        console.log(this.baseURL)
    }
    setInterceptors(instance) {
        instance.interceptors.request.use(config => {
            // 一般增加一些token属性 jwt
            config.headers.authorization = 'Bearer ' + getLocal('token')
            return config;
        });
        instance.interceptors.response.use(res => {
            if (res.status === 200) {
                // 服务器返回的结果都会放到data上
                if (res.data.err === 0) {//统一处理服务端返回的错误状态码
                    return Promise.resolve(res.data)
                } else {
                    return Promise.reject(res.data.data);
                }
            } else {
                // 中间增加一个data字段，失败的原因
                return Promise.reject(res.data.data);
            }
        }, err => {
            // 单独处理其他的状态码异常
            switch (err.response.status) {
                case '401':
                    console.log('err')
                    break;
                default:
                    break;
            }
            return Promise.reject(err);
        })
    }
    mergeOptions(options) {
        return {
            baseURL: this.baseURL,
            timeout: this.timeout,
            ...options
        }
    }
    request(options) {
        // 创建一个axios实例 去发送请求， 用实例是因为希望每个实例的拦截器与其他请求无关
        // 如果全局的实例，想给每次请求单独配置拦截器就做不到了
        const instance = axios.create();
        this.setInterceptors(instance);
        // 拿到用户传来的选择项 合并
        const opts = this.mergeOptions(options);
        return instance(opts)
    }
    get(url, config) {
        console.log(url)
        return this.request({
            method: 'get',
            url,
            ...config  // get请求可以直接展开，
        })
    }
    post(url, data) {
        console.log('post---------------', url)
        return this.request({
            method: 'post',
            url,
            data: data // post请求要求必须传入data属性
        })
    }
}

export default new HttpRequest