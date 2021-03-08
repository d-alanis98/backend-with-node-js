const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    const source = fs.createReadStream('./big-file.txt');
    source.pipe(res);
});

server.listen(3000);
console.log('Server listening on http://localhost:3000');