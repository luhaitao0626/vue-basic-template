export default {
    // 开发和打包是默认的两个环境
    baseURL: process.env.NODE_ENV === 'development' ? 'http://121.40.234.82:8001/web/api' : 'http://121.40.234.82:8001/web/api',
    admin: 'ADMIN',
}

// console.log(process.env)