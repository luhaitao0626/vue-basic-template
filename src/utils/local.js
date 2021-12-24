// 设置的时候要将对象转成字符串
export const setLocal = (key,value)=>{
    if(typeof value ==='object'){
        value = JSON.stringify(value);
    }
    localStorage.setItem(key,value)
}

// 获取本地的值 需要转化成对象
export const getLocal = (key)=> {
    let value = localStorage.getItem(key) || '';
    if(value.startsWith('[') || value.startsWith('{')){
        return JSON.parse(value)
    }else{
        return localStorage.getItem(key) || ''
    }
}

window.setLocal = setLocal;
window.getLocal = getLocal;
