var http = require('http');

http.createServer(function(req,res){

res.writeHead(200,{'Content-Type':'text/plain'});
res.end("my node app");

}).listen(process.env.PORT,console.log("server running"));
