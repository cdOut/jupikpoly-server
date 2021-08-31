const express = require("express");
const socket = require("socket.io");
const path = require("path");

const app = express();
const port = 3000;

//Additional consts
const colors = require("colors");

//Requests
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//
const server = app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`.green);
});

const io = socket(server);

io.on("connection", socket => {});
