//morgan : 웹 요청이 들어왔을 때 로그를 출려력하는 미들웨어
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('combined'));

app.use((req, res)=>{
    res.send('<h1>Morgan Test</h1>');
});

app.listen(3000, ()=>{
    console.log("서버 실행중... http://localhost:3000");
});