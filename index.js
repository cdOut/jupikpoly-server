const express = require("express");
const socket = require("socket.io");

//Additional consts
const cors = require("cors");
const colors = require("colors");
const path = require("path");

//Imports
const GameRoom = require("./src/GameRoom");

//Test code
let gameRoom = new GameRoom();
//

//Settingss
const app = express();
const port = 3000;

app.use(cors());

//Requests
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//
const server = app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`.green);
});

const io = socket(server, {
  cors: {
    origin: "http://127.0.0.1:5500", //client address
    methods: ["GET", "POST"]
  }
});

io.on("connection", socket => {
  console.log(`${socket.id} connected`.blue)

  socket.on("createLobby", () => {
    console.log('cr lb')
  })

  socket.on("joinLobby", lobbyId => {
    console.log(lobbyId)
  })

  socket.on("disconnect", () => {
    console.log(`${socket.id} disconnected`.red)
  })
});
