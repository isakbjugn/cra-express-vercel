const express = require('express');

const app = express();

app.get("/", (req, res) => {
  res.send("Express på Vercel!")
});

app.listen(5000, () => {
  console.log("Tjener kjører på port 5000.");
});

module.exports = app;