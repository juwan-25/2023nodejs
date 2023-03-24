//서버에서 파일 읽어서 가져오기
const http = require('http');
const fs = require('fs');

//req : 요청, res :응답 > createSever로 정의
const server = http.createServer((req, res)=>{
    fs.readFile("./server2_html.html",(err,data)=>{
        if(err){
            throw err;
        }
        res.statusCode = 200; //성공코드
        res.setHeader("Content-Type","text/html");
        res.end(data);
    });
});

server.listen(8088);

server.on('listening', ()=>{
    console.log("8088 포트에서 서버 대기중...");
});

server.on('error', (error)=>{
    console.error(error);
});


