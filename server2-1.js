//서버에서 파일 읽어서 가져오기
const http = require('http');
const fs = require('fs');

const server = http.createServer(async (req, res)=>{
    try{
        const data = await fs.readFile("./server2_html.html");
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(data);
    }catch(err){
        console.error(err);
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(err.message);
    }
});

server.listen(8088);

server.on('listening', ()=>{
    console.log("8088 포트에서 서버 대기중...");
});

server.on('error', (error)=>{
    console.error(error);
});


