var http = require("http");
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    // switch (req.url) {
    //     case "/about":
    //         res.write("Ini adalah halaman about");
    //         break;
    //     case "/profile":
    //         res.write("Ini adalah halaman profile");
    //         break;
    //     case "/product":
    //         res.write("Ini adalah halaman product");
    //         break;
    //     default:
    //         res.write('404: Halam tidak ditemukan');
    // }
    var q = url.parse(req.url, true).query;
    var txt = 'Kata Kunci:' +q.keyword;
    res.end(txt);
}).listen(8000);

console.log("Server running on http://localhost:8000");
