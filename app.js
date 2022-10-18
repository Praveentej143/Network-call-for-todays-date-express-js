const express = require("express");
const app = express();
app.get("/", (request, response) => {
  const newDate = new Date();
  response.send(
    `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`
  );
});
module.exports = add;
