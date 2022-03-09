console.warn("Initializing server...");
const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
const buildPath = path.join(__dirname, "dist", "quick-wait-profile");
app.use(cors());
app.use(express.static(buildPath));
app.set("port", process.env.PORT || 8080);

app.get("*", function (req, res) {
  console.log(__dirname);
  console.log(buildPath);
  // res.sendFile(path.join(buildPath, "index.html"));
  res.sendFile(buildPath);
});

const server = app.listen(app.get("port"), function () {
  console.log("listening on port ", server.address().port);
});
