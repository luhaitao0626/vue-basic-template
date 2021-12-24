import Vue from 'vue'
import Vuex from 'vuex'
import rootModule from './rootModule';
Vue.use(Vuex)

const files = require.context('./modules', false, /\.js$/);
files.keys().forEach(key => {
    // 模块对应的内容
    let store = files(key).default;
    let moduleName = key.replace(/^\.\//, "").replace(/\.js$/, '');
    console.log(moduleName);
    let modules = rootModule.modules = (rootModule.modules || {});
    modules[moduleName] = store;
    modules[moduleName].namespaced = true;
});

// console.log(rootModule.modules)

let store = new Vuex.Store(rootModule)

export default store;
