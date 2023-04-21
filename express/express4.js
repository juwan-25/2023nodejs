const express = require('express');
const app = express();

app.use((req, res, next)=>{
    console.log('첫번째');
    next();
});

app.use((req, res, next)=>{
    console.log('두번째');
    next();
});

app.use((req, res, next)=>{
    let name = req.query.name;
    let area = req.query.area;
    console.log('세번째');

    res.send(`<h1>${name} : ${area}</h1>`);
});

app.listen(3000, ()=>{
    console.log("서버 실행중... http://localhost:3000//?name=qwer&area=1234");
});