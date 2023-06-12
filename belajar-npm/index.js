var http = require('http');
http.createServer(function(req, res){
    res.end('Hello World!');
}).listen(8000);

console.log('Server running on http://localhost:8000');