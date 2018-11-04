// 0 安装
// 1 引包

var express = require('express')

// 2,创建你服务器应用程序
//    也就是原来的http.createServer
var app = express()

// 在express中开放资源 指定目录 
// 例如 /public/ 访问public中的内容
app.use('/public/',express.static('./public/'))
app.use('/static/',express.static('./static/'))
app.use('/node_modules/',express.static('./node_modules/'))

// 模板引擎，在express也是一个API的事儿
// 得到路径 一个一个的判断 
app.get('/about',function(req,res){
    // req.query 获取查询字符串参数
    console.log(req.query)
    res.send('你好，我是express')
})

app.get('/pinglun',function(req,res){
    console.log('我是天才中的战斗机')
})

app.get('/',function(req,res){
    res.send(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
        </head>
        <body>
            <h1>你好，我是无敌的丰</h1>
        </body>
        </html>
        `
    )
})

app.listen(3000,function(){
    console.log('app is running at port 3000')
})