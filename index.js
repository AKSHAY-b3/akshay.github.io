var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
fs.appendFile('new.txt',res.url+"\n",function(err){
if(err) console.log("error occured");
console.log('request from '+res.url);
)}
res.writeHead(200,{'Content-Type':'text/plain'});
res.end("my node app");

}).listen(process.env.PORT,console.log("server running"));
