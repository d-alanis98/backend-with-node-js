const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    fs.readFile('./big-file.txt', (error, data) => {
        if(error)
            console.error(error);
        res.end(data);
    })
});

server.listen(3000);
console.log('Server listening on http://localhost:3000');