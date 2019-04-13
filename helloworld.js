const http = require('http');
const port = 8098;

const server = http.createServer((req, res) => {
    res.end('Hello, World. Greeting from Xiaoqi');
});

server.listen(port, () => {
    console.log('Server listening on: http://localhost:%s', port);
});