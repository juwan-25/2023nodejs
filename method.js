const http = require('http');
const url = require('url');

const server1 = http.createServer();
server1.on('request', (req, res)=>{
    console.log("method : ", req.method);
    console.log("url1 : ", req.url);
    console.log("url2 : ", url.parse(req.url));
    console.log("url2-1 : ", url.parse(req.url).pathname);
    console.log("url3 : ", url.parse(req.url).query);
    console.log("url4 : ", url.parse(req.url,true).query);
    let queryObj = url.parse(req.url,true).query;

    if(req.method == "GET"){
        console.log("GET 요청입니다");
    }else if(req.method == "POST"){
        console.log("POST 요청입니다");
    }

    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<!DOCTYPE html><html lange="en"><head><meta charset="UTF-8"></meta></head></html>');
    res.write(`<h1>요청타임은 ${req.method}입니다.</h1>`);
    res.write(`<h1>요청타임은 ${url.parse(req.url).pathname}입니다.</h1>`);
    res.write(`<h1>요청타임은 ${JSON.stringify(queryObj)}입니다.</h1>`);
    res.end('</body></html>');
});

server1.listen(3000, ()=>{
    console.log("서버 시작...");
});