const express = require('express');
const app = express();

app.use((req, res)=>{
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    res.end("<h1>Express 실행</h1>");
});

app.listen(3000, ()=>{
    console.log("서버 실행중... http://localhost:3000");
});