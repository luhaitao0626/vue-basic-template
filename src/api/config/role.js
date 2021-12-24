// 接口抽离的文件
export default {
    // @params {rolename, weight}   
    addRole: '/RoleService/addRole',       // return roleInfo

    // @params {id, rolename, weight}
    updateRole: '/RoleService/updateRole',     // return roleInfo

    // @params {id}
    deleteRole: '/RoleService/deleteRole', // return 

    // @params {}
    getRoleList: '/RoleService/getAllRoles' // return roleList
}