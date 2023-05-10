const http = require('http');
const fs = require('fs');
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
    let filename = 'home.png';
    fs.readFile(filename, (err, data) => {
        res.writeHead(200, {"Content-Type": "image/png"});
        res.write(data);
        res.end();
    });
});
    

server.on('close', () => {
    console.log('서버가 종료됩니다.');
});