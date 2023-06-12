var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){
    var q = url.parse(req.url, true);

    if(q.pathname == '/search/' && req.method === 'GET'){
        var keyword = q.query.keyword;

        if(keyword){
            //ambil data dari form method get
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<h3>Search Result:</h3>');
            res.write('<p>Anda mencari: <b>'+keyword+'</p>');
            res.write('<pre>No result. Sorry website is under maintenance</pre>');
            res.end('<a href="/search/">Kembali</a>')
        }else{
            //tampilkan form search
            fs.readFile('search.html', (err, data) =>{
                if(err){
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    return res.end('404 not found');
                }

                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(data);
                return res.end();
            })
        }
    }
}).listen(8000);

console.log('Server running on http://localhost:8000');