const express = require('express');

const app = express();
app.set('port', (process.env.PORT || 8080))

app.get("/api", (req, res) => {
  res.send("Express på Vercel!")
});

app.listen(app.get('port'), () => {
  console.log("Tjener kjører på port", app.get('port'));
});

module.exports = app;