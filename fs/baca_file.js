var fs = require('fs');
var http = require('http');

http.createServer(function(req, res){
    //read
    fs.readFile('index.html', (err, data)=>{
        if(err) throw err;

        //send respom
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        res.end();
    })
}).listen(8000);

console.log('Server running on http://localhost:8000');