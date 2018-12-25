var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/plain'});
console.log(req.url);
res.end("my node app");
}).listen(process.env.PORT,console.log("server running"));
