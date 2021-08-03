const express = require("express");
const router = express.Router();

//Login
router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`${name}, Welcome back!`);
  }
  res.status(401).send("Please Provide Credentials");
});

module.exports = router;
