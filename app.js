const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("I am in the middleware");
  next();
});

app.use((req, res, next) => {
  console.log("I am in the another middleware");
  res.send("<h1>Hello from express!</h1>");
  
});

app.listen(3000);
