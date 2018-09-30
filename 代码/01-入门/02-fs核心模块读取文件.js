// fs是file-system的简写，就是文件系统的意思
// 在弄node中如果想要进行文件操作，就必须引入fs这个核心模块
// 在fs这个核心模块中，就提供了所有的文件操作相关的API
// 例如：fs.readFile就是用来读取文件的

var fs = require('fs')//使用require加载核心模块
fs.readFile('./data.txt',function(error,data){
    if(error){
        console.log('读取文件失败了')
    }else{
        console.log(data.toString())
    }
})

// fs.readFile() 读取文件,第一个参数是读取文件的路径，第二个参数是回调函数，里面有两个参数
// 第一个参数是error 是否报错， 如果error存在那么就表示读取文件失败了
// 第二个参数是data，读取文件的数据，读取成功 能够得到成功的数据，
// 成功 
//   data  成功的数据对象
//   error null
// 失败 
//   data undefined
//   error 失败的错误对象