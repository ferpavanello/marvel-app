const express = require("express");
const path = require("path");
const app = express();

const routes = require("./server/routes/route");

app.use(express.static(path.join(__dirname, "dist")));
app.use("/routes", routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./dist/marvel-app"));
});

app.listen(4600, (req, res) => {
  console.log("RUNNING");
});
