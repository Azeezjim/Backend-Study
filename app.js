
const express = require("express");

const  bodyParser = require('body-parser')

const app = express();

app.bodyParser

app.use("/add-prodect", (req, res, next) => {
  res.send(<form action="/prodoct" method="POST"><input type="text" name="title"> <button type="submit">Add Product</button></input></form>)
})

app.use('/prodoct', ( req, res, next) => {
  console.log(res.body);
  res.redirect("/");
})

app.use('/', (req, res, next) => {
  console.log("Second middleware");
  res.send("Hello World");
})


app.listen(5001);