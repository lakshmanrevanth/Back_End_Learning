// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "content-type": "text/plain" });
//   res.end("home page");
// });

// const port = 4000;

// server.listen(port, () => {
//   console.log("server is listening to the port ");
// });

// creating the routes

const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("home page");
  } else if (url === "/projects") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("projects section");
  } else {
    res.writeHead(404, { "content-type": "text/plain" });

    res.end("out of network");
  }
});

const port = 5000;

server.listen(port, () => {});
