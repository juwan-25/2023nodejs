//req, res 객체에 cookie 속성과 cookie라는 메서드 부여
//cookie : 웹 브라우저 상에서 정보를 저장하는 기술
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(cookieParser());

app.use('/getCookie', (req, res)=>{
    res.send(req.cookies);
});

app.use('/setCookie', (req, res)=>{
    res.cookie("st", "abc");
    res.cookie("st", {
        name : "런쥔",
        age : 3
    });
    res.redirect("/getCookie");
});


app.listen(3000, ()=>{
    console.log("서버 실행중... http://localhost:3000/setCookie");
});