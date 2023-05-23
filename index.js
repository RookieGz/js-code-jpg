const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3300;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./example.html"));
});

app.get("/*.jpeg", (req, res) => {
  res.sendFile(path.join(__dirname, req.url));
});

app.listen(port, () => {
  console.log("服务启动：localhost:", port);
});
