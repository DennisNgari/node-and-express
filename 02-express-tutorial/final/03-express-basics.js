const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("user hit the resource");
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});

// HTTP METHODS.
// app.get - get all orders
// app.post - place an order (send data)
// app.put - update specific order (params + send data)
// app.delete - delete order (path params)
// app.all - This handles all HTTP requests that the user can access.
// app.use
// app.listen
