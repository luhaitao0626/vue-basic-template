import * as types from "../action-types";
import * as role from "@/api/role.js";
// import { getLocal, setLocal } from "../../utils/local";
// import router from "@/router";
// import per from "@/router/per.js";

export default {
    state: {
        roles: [],
        selectedRole: {},
        userRole: [],
    },
    mutations: {
        [types.SET_ROLES](state, roles) {
            state.roles = roles;
        },
        [types.GET_SELECTED_ROLE](state, role) {
            state.selectedRole = role;
        }
    },
    actions: {
        async [types.SET_ROLES]({ commit }) {
            let { data } = await role.getRoleList();
            commit(types.SET_ROLES, data);
        },
        async [types.ADD_ROLE]({ dispatch }, payload) {
            await role.addRole(payload);
            dispatch(types.SET_ROLES);
        },
        async [types.UPDATE_ROLE]({ dispatch }, payload) {
            await role.updateRole(payload);
            dispatch(types.SET_ROLES);
        },
        async [types.DELETE_ROLE]({ dispatch }, payload) {
            await role.deleleRole(payload);
            dispatch(types.SET_ROLES);
        }
    },
};
