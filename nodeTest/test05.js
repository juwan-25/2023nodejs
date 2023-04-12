const fs = require('fs');
const http = require('http');

const server1 = http.createServer();
server1.on('request', (req, res)=>{
    fs.readFile("./read_img.jpg", (err, data)=>{
        res.writeHead(200,{'Content-Type':'image/jpeg'});
        res.end(data);
    });
});

server1.listen(8099, ()=>{
    console.log("8099 포트 이미지 서버 시작...");
});