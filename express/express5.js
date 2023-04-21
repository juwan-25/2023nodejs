const express = require('express');
const app = express();

// 아무것도 입력없이 들어왔을 때
app.get('/', (req, res)=>{
    res.send(`<h1>페이지</h1>
        <a href='/aaa'>aaa</a>
        <a href='/bbb'>bbb</a>
    `);
});

app.get('/page/:id', (req, res)=>{
    console.log('page');
    let pageId = req.params.id;
    res.send(`<h1>${pageId} 페이지</h1>
        <a href='/aaa'>aaa</a>
        <a href='/bbb'>bbb</a>
    `);
});

app.get('/aaa', (req, res)=>{
    res.send('<h1>aaa 페이지</h1>');
});

app.get('/bbb', (req, res)=>{
    res.send('<h1>bbb 페이지</h1>');
});

// * 모든 라우터 해당 가능 
// express 모듈은 라우터 메서드를 사용한 순서대로 요청 확인 > 전체 선택자는 마지막에 있어야 함
app.all('*', (req, res)=>{
    res.status(404).send('<h1>페이지를 찾을 수 없습니다</h1>');
});

app.listen(3000, ()=>{
    console.log("서버 실행중... http://localhost:3000");
});