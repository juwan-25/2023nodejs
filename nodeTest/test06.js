const fs = require('fs').promises;
const http = require('http');

const server = http.createServer(async (req, res)=>{
    try{
        res.writeHead(200, {"Content-Type":"text/html;charset=utf8"});
        const data = await fs.readFile("./read_html.html");
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
