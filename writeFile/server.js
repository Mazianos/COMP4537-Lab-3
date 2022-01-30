const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function (req, res) {
  const q = url.parse(req.url, true);
  res.writeHead(200, { 'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*' });
  fs.appendFile(`../file/file.txt`, `${q.query.text}\n`, function (err) {
    if (err) {
      throw err;
    }
    console.log('Saved file.txt!');
  });
  res.end();
}).listen(3000);
//change the port number

console.log("server is running and listening");