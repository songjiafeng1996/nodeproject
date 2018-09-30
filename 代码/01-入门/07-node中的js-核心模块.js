// os用来获取机器信息
var os = require('os')

// 用来操作路径的
var path = require('path')

console.log(os.cpus())//获取当前机器的CPU信息

// memory 内存
console.log(os.totalmem())

console.log(path.extname("c:a/b/c/hello.txt"))//获取一个路径中的扩展名部分 extname extension name 