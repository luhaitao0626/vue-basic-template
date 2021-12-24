import { getSlider } from "../api/public";
import * as types from "./action-types";
import WS from "../utils/websocket";
export default {
	state: {
		sliders: [],
		logo: [],
		hasPermission: false,
		//websocket
		ws: null,
		message: "",
		title: "",
	},
	mutations: {
		[types.SET_SLIDERS](state, payload) {
			state.sliders = payload;
		},
		[types.SET_TITLE](state, payload) {
			state.title = payload;
		},
		[types.SET_PERMISSION](state, has) {
			state.hasPermission = has;
		},
		[types.CREATE_WEBSOCKET](state, ws) {
			state.ws = ws;
		},
		[types.SET_MESSAGE](state, msg) {
			state.message = msg;
		},
	},
	actions: {
		async [types.SET_SLIDERS]({ commit }) {
			let { data } = await getSlider();
			console.log(data)
		},
		async [types.SET_PERMISSION]({ commit }) {
			commit(types.SET_PERMISSION, true);
		},
		async [types.CREATE_WEBSOCKET]({ commit }) {
			let ws = new WS();
			ws.create();
			commit(types.CREATE_WEBSOCKET, ws);
		},
	},
};
