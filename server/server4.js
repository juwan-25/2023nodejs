//url searchParams 사용하기
const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const url = require('url');

const server = http.createServer(async (req, res)=>{
    try{
        console.log("URL : ",req.url);

        if(req.url == '/favicon.ico'){
            return res.writeHead(404);
        } 
        
        const myUrl1 = new URL(req.url,"http://localhost:8088/");
        const myUrl = new URL(req.url,"http:/"+req.headers.host+"/");

        console.log("serchParams : ",myUrl.searchParams);
        let fileSet = myUrl.searchParams.get("filename") || "index";

        res.writeHead(200, {"Content-Type":"text/html;charset=utf8"});

        console.log("fileSet : ",fileSet, "__dirname", __dirname);
        console.log("경로 : ", path.join(__dirname,"./html/",fileSet+".html"));

        //원하는 파일을 열 수 있도록 함
        const data = await fs.readFile(path.join(__dirname,"./html/",fileSet+".html")); // 절대경로
        //const data = await fs.readFile(`./html/${fileSet}.html`); //상대경로
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
