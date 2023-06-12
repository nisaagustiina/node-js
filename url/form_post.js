var http = require("http");
var qs = require("querystring");
var fs = require("fs");

http.createServer(function (req, res) {
    if (req.url === "/login/" && req.method === "GET") {
        //tampilkan form login
        fs.readFile("login.html", (err, data) => {
            if (err) {
                res.writeHead(404);
                return res.end("404 not found", {
                    "Content-Type": "text/html",
                });
            }

            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        });
    }

    if (req.url === "/login/" && req.method === "POST") {
        var reqBody = "";
        req.on("data", function (data) {
            reqBody += data;

            if (reqBody.length > 1e7) {
                res.writeHead(413, "request enitity too large", {
                    "Content-Type": "text/html",
                });
                res.end(
                    "<!doctype html><html><head><title>413</title></head><body>413: Request Entity Too Large</body></html>"
                );
            }
        });

        req.on("end", function () {
            var formData = qs.parse(reqBody);

            //cek login
            if (formData.username === "nisa" && formData.password === "1234") {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write("<h2>Welcome boss</h2>");
                res.write("<p>username: " + formData.username + "</p>");
                res.write("<p>password: " + formData.password + "</p>");
                res.write('<a href="/login/">Kembali</a>');
                res.end();
            } else {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.write("<h2>Login Gagal</h2>");
                res.write('<a href="/login/">Coba lagi</a>');
                res.end();
            }
        });
    }
}).listen(8000);

console.log("Server running on http://localhost:8000");
