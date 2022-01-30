const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function (req, res) {
  const q = url.parse(req.url, true);
    fs.readFile(`../file/file.txt`, function(err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*' });
    res.write(data);
    return res.end();
  });
  
}).listen(3000);
//change the port number

console.log("server is running and listening");