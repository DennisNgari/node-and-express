const http = require("http");
const { readFileSync } = require("fs");

// Get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const logoSvg = readFileSync("./navbar-app/logo.svg");
const browserApp = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);
  // Home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  //About Page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Welcome to the About Page</h1>");
    res.end();
  }
  //Homepage Styles.
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  }
  //BrowserApp.
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(browserApp);
    res.end();
  }
  //logo-svg.
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(logoSvg);
    res.end();
  }
  //404 page not found.
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(`<h1>EROR 404:\n Page Not Found</h1>`);
    res.end();
  }
});

server.listen(3000);
