const http = require('http');
const port=process.env.PORT || 3000
 http.createServer((req, res) => {
res.setHeader('Content-Type', 'text/html');

res.end('<h1>Hello World</h1>');

});
