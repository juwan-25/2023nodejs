const http = require('http');
const server = http.createServer();

const host = '10.96.124.116';
const port = 3000;

server.listen(port, host, '50000', () => {
    console.log(`http://${host}:${port}/`);
});