var i=0;

function timedCount(){
i=i+1;
postMessage(i);
//向HTML页面(主线程)传回一段消息
setTimeout("timedCount()",500);
// 500毫秒，0.5s
// 0.5后执行第一个参数
// 0.5s后执行timedCount()函数
}

timedCount();