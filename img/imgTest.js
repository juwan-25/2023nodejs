const http = require('http');
const fs = require('fs');

const server1 = http.createServer();
server1.on('request', (req, res)=>{
    fs.readFile("./chenle.jpg", (err, data)=>{
        res.writeHead(200,{'Content-Type':'image/jpeg'});
        res.end(data);
    });
});

server1.listen(3000, ()=>{
    console.log("3000 포트 이미지 서버 시작...");
});

const server2 = http.createServer();
server2.on('request', (req, res)=>{
    fs.readFile("./beatbox.mp3", (err, data)=>{
        res.writeHead(200,{'Content-Type':'audio/mp3'});
        res.end(data);
    });
});

server2.listen(3001, ()=>{
    console.log("3001 포트 음악 서버 시작...");
});

const server3 = http.createServer();
server3.on('request', (req, res)=>{
    fs.readFile("./me.mp4", (err, data)=>{
        res.writeHead(200,{'Content-Type':'video/mp4'});
        res.end(data);
    });
});

server3.listen(3002, ()=>{
    console.log("3002 포트 영상 서버 시작...");
});

const server4 = http.createServer();
server4.on('request', (req, res)=>{
    res.writeHead(200,{'location':'https://github.com/juwan-25'});
    res.end();
});

server4.listen(3003, ()=>{
    console.log("3003 포트 다이렉트 서버 시작...");
});