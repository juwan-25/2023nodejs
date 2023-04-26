//session 속성부여 
//session : 서버에 정보를 저장하는 기술 
//세션 식별자 쿠키 부여
const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret:"secret key",
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:60*1000
    }
}));

app.use((req,res)=>{
    req.session.now = (new Date()).toUTCString();
    res.send(req.session);
});

app.listen(3000, ()=>{
    console.log("서버 실행중... http://localhost:3000");
});