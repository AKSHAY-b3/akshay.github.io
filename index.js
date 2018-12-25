var http = require('http');

 http.createServer((req, res) => {
res.setHeader('Content-Type', 'text/html');

res.end('<h1>Hello World</h1>');

}).listen(process.env.PORT,console.log("server running"));
