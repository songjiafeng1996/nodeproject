var http = require('http');
var server = http.createServer()
server.on('request',function(req,res){
    console.log("我是天才中的战斗机，"+ req.url)
    // req是客户端发送给服务端的，res是服务端响应给客户端的
     

    res.write("hello")
    res.write("hi")
    res.end()//响应结束
   


})

server.listen(3000,function(){
    console.log('服务器已经启动，请访问：http://127.0.0.1:3000')
})