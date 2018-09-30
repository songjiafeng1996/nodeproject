var fs = require('fs');//用require导入fs模块

fs.writeFile('./a.txt',"我是天才中的战斗机，我要无敌于天下",function(err){
    if(err){
        console.log("写入文件失败")
    }else{
        console.log("写入文件成功")
    }
})

// fs.writeFile 写入文件一共有三个参数，第一个是写入的路径，第二个是写入的数据，第三个是回调函数，里面有一个错误对象的参数err