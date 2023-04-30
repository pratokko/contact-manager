const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Helloo express");
});

app.listen(port, () => {
  console.log(`app now listenig to port ${port}`);
});
