var http =require('http');

// 加载http 核心模块
var server = http.createServer()
// 使用http.createServer()方法创建一个web服务器，返回一个server实例

server.on('request',function(req,res){
    console.log("收到客户端请求了")
})

//  3，服务器要干嘛？
//     提供对服务：对 数据的服务
//     发请求
//     接受请求
//     处理请求
//     给个反馈
//     注册 request 请求事件
//     当客户端请求过来，就会自动触发服务器 request 请求事件，然后执行第二个参数 ：回调处理函数
// 绑定端口号，启动服务器
server.listen(3000,function(){
    console.log('服务器启动成功了，可以通过http://127.0.0.1:3000/来进行访问')
})