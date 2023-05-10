const http = require('http');
const server = http.createServer();

const port = 3000;

server.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});

server.on('connection', (socket) => {
    var addr = socket.address();
    console.log(`클라이언트가 접속했습니다. : ${addr.address}, ${addr.port}`);
});

server.on('request', (req, res) => {
    console.log('클라이언트 요청이 들어왔습니다.');
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write(" <head>");
    res.write(" <title>응답 페이지</title>");
    res.write(" </head>");
    res.write(" <body>");
    res.write(" <h1>http 응답 페이지!!</h1>");
    res.write(" </body>");
    res.write("</html>");
    res.end(); 
    });
    

server.on('close', () => {
    console.log('서버가 종료됩니다.');
});