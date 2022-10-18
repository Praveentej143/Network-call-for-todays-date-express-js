const express = require("express");

const app = express();

app.get("/", (request, response) => {
  let myDate = new Date();
  response.send(
    `${myDate.getDate()}-${myDate.getMonth() + 1}-${myDate.getFullYear()}`
  );
});
module.exports = app;
