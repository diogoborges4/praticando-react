const http = require("http");

const port = 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home Page</h1>");
  }

  if (req.url === "/users") {
    const users = [
      {
        name: "jose silva",
        email: "jose@gmail",
      },
      {
        name: "chico linguça",
        email: "chico@linguiça.com",
      },
    ];

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`Rodando na porta ${port}`));
