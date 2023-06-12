var http = require('http');
var fs = require('fs');
var formidable = require('formidable');
var mv = require('mv');

http.createServer(function(req, res){
    //kirim form uoload
    if(req.url === '/' && req.method === 'GET'){
        fs.readFile('form_upload.html', (err, data) => {
            res.writeHead(200, {'Content-Type':'text/html'});
            if(err) throw err;
            res.end(data);
        })
    }

    //upload file
    if(req.url == '/' && req.method == 'POST'){
        var form = new formidable.IncomingForm();

        form.parse(req, function(err, fields, files){
            var oldPath = files.fileupload.path;
            var newPath = __dirname + '/upload/'+files.fileupload.name;

            //pindah
            mv(oldPath, newPath, function(err){
                if(err) throw err;
                console.log('File upload success');
                return res.end('file upload success');
            });
        });
    }
}).listen(8000);

console.log('server running on http://localhost:8000');