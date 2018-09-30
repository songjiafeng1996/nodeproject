var a = 10;
 

var bfun = function(x,y){
    return x+y
}


console.log(bfun(1,2))

var bexports = require('./b.js')

console.log(bexports.e)
console.log(bexports.add(3,5))

// 在b文件中把要被b文件访问的变量或函数全部添加到exports中

// 在a文件中用require导入b文件
// var bexports = require('./b.js')
// 然后用bexports.变量或函数，来访问b文件的变量或函数