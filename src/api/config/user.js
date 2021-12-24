// 接口抽离的文件
// const prefix = 'http://localhost:4000';
// prefix 加到下面路径中，会覆盖baseURL

// 实现接口请求路径的抽离
export default {
    // reg: prefix + '/user/reg',
    reg: '/user/reg',
    // @params {username, password ,?verifycode}
    login: '/user/login',            // return userInfo {name,id,role,token...}
    // @params {id} // 是否需要?，验证是否登陆过        
    validate: '/UserService/validate',       // return userInfo
    // @params {pageNum,pageSize} 
    getUserList: '/UserService/getAllUsers',// return userList

    // @params {userName,password,role}
    createUser: '/UserService/addUser',        // return userInfo

    // @params {userName,password,role}
    updateUser: '/UserService/updateUser',  // return userInfo

    // @params {id}
    deleteUser: '/UserService/deleteUser',  // return 


}