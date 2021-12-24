import { getLocal } from "@/utils/local";
import store from "../store";
// websocket 可以实现双向通信，长链接，有心跳检测； h5提供的可以实时通信
class WS {
	constructor(config = {}) {
		this.url = config.url || "localhost";
		this.port = config.port || 4000;
		this.protocol = config.protocol || "ws";
		// 心跳检测
		this.time = config.time || 30 * 1000;
		this.ws = null;
	}
	onOpen = () => {
		// (鉴权)规定好第一次必须发一个对象，对象包含两个字段;type data
		// websocket 基于tcp 第一次链接靠http, 但是不能修改header
		this.ws.send(JSON.stringify({
			type: "auth",
			data: getLocal("token"),
		}));
	};
	onMessage = (e) => {
		let { type, data } = JSON.parse(e.data);
		switch (type) {
			case "noAuth":
				console.log("没有权限");
				break;
			case "heartCheck":
				this.checkServer();
				this.ws.send(JSON.stringify({ type: "hearCheck" }));
				break;
			default:
                store.commit(type.SET_MESSAGE,data)
				// console.log("ws message", data);
            
		}
		console.log(data);
	};
	onClose = () => {
		this.ws.close();
	};
	onError = () => {
		setTimeout(() => {
			this.create();
		},1000);
	};
	create() {
		this.ws = new WebSocket(`${this.protocol}://${this.url}:${this.port}`);
		this.ws.onopen = this.onOpen;
		this.ws.onmessage = this.onMessage;
		this.ws.onclose = this.onClose;
		this.ws.onerror = this.onError;
	}
	checkServer() {
		// 断线重连
		clearTimeout(this.timer); // 防抖
		this.timer = setTimeout(() => {
			this.onClose(); // 关闭、断开
			this.onError(); // 重连
		}, this.time + 10000); // 40s 还未收到心跳检测，就认为服务器断了，重新创建连接
	}
	send = (msg) => {
		this.ws.send(JSON.stringify(msg));
	}
}
export default WS;
