const http = require('http');
const server = http.createServer();

const port = 3000;

server.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});

server.on('request', (req, res) => {
    console.log('클라이언트 요청이 들어왔습니다.');
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.write("안녕하세요 이주완입니다!");
    res.end(); 
});
