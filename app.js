
const express = require("express");

const app = express();

app.use("/add-prodect", (req, res, next) => {
  res.send(<form action="/prodiuct" method="POST"><input type="text" name="title"> <button type="submit">Add Product</button></input></form>)
  next()
})

app.use((req, res, next) => {
  console.log("Second middleware");
  res.send("Hello World");
})


app.listen(5001);