const http = require('http');
const fs = require('fs');
const url = require('url');

http
  .createServer((req, res) => {
    const query = url.parse(req.url, true);
    console.log(query.pathname);
    let filename = '.' + query.pathname;
    filename = filename === './' ? './index' : filename;
    console.log(filename);

    filename = filename + '.html';
    console.log(filename);

    fs.readFile(filename, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        return res.end('404 not found');
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);

console.log('Sever listening on 8080....');
