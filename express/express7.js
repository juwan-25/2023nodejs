const express = require('express');
const app = express();
app.use(express.static(__dirname+'/public'));

app.use((req, res)=>{
    res.writeHead(200, {"Content-Type":"text/html"});
    res.end("<img src='/peng.jpg' width='100%'>");
});

app.listen(3000, ()=>{
    console.log("서버 실행중... http://localhost:3000");
});