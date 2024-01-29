
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("First middleware");
  res.send("Hello World");
})


app.listen(3000);