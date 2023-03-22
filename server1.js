//서버 만들기
const http = require('http');

// http.createServer((req, res)=>{
//     res.write("<h1>Hello World:)</h1>");
//     res.end("<p>Welcom to My Server!!</p>");
// }).listen(8088, ()=>{
//     console.log("8088 포트에서 서버 대기중...");
// });

const server = http.createServer((req, res)=>{
    res.write("<h1>Hello World:)</h1>");
    res.end("<p>Welcom to My Server!!</p>");
});

server.listen(8088);

server.on('listening', ()=>{
    console.log("8088 포트에서 서버 대기중...");
});

server.on('error', (error)=>{
    console.error(error);
})

