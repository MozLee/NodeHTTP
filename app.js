const express = require('express');
let app = express();
app.use(express.static(__dirname+'/public'))
app.listen(8080,function () {
	// body...q
	console.log('xiaobaosystem启动成功')
});
