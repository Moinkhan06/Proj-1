const http = require("http");
const fs = require('fs');
const port = 8980;

const requestHandler = (req, res) => {
  let fileName = "";

  switch (req.url) {
    case '/':
      fileName = "./index.html";
      break;
    case '/about':
      fileName = "./about.html";
      break;
    case '/blog':
      fileName = "./blog.html";
      break;
    case '/contact':
      fileName = "./contact.html";
      break;
  }

  fs.readFile(fileName, (err, result) => {
    if (err) {
      console.error(err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server Error');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(result);
  });
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.error("Server not Start", port);
    return;
  }
  console.log("Server startet" + port);
});




