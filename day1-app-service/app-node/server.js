const http = require('http');

const port = process.env.PORT || 8080;
const env = process.env.APP_ENV || "not set";
const version = process.env.APP_VERSION || "not set";

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});

  res.end(`
    <h1>Azure App Service Lab</h1>
    <p>Application running in Azure App Service</p>
    <p><b>APP_ENV:</b> ${env}</p>
    <p><b>APP_VERSION:</b> ${version}</p>
  `);
});

server.listen(port, () => {
  console.log("Server running on port " + port);
});