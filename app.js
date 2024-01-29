
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("First middleware");
  
})


app.listen(3000);