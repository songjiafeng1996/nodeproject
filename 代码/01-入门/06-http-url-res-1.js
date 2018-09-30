var http = require('http')

var server = http.createServer()

server.on("request", function (req, res) {
    var url = req.url;
    if (url === '/') {
        res.end('index page')
    } else if (url === "/login") {
        res.end('login page')
    } else if (url === "/abc") {
        var product = [
            {
            name: '苹果X',
            price: 4556
        },
        {
            name:'菠萝',
            price:444
        },
        {
            name:'香蕉',
            price:333
        },
        {
            name:'葡萄',
            price:33344
        }
    ]

    res.end(JSON.stringify(product))

    } else {
        res.end('not found 404')
    }

})

server.listen(3000, function () {
    console.log('服务器已经启动，请访问 http://127.0.0.1:3000')
})