const express = require("express");
const app = express();

const people = require("./routes/people");
const auth = require("./routes/auth");

//Static Assets
app.use(express.static("./methods-public"));

//parse form  data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());
//Base Route
app.use("/api/people", people);
app.use("/login", auth);

//port
app.listen(5000, () => {
  console.log("Server is listening on port 3000...");
});
