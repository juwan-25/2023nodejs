const http = require('http');
const server = http.createServer();
const port = 3000;

server.listen(port, function() {
    console.log(`http://localhost:${port}/`);
});
