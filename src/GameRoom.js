const GameStates = require("./enums/GameStates");

class GameRoom {
  constructor() {
    this.idLength = 30;
    this.gameID = this.generateID();
    this.gameState = GameStates.LOBBY;
  }

  generateID() {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < this.idLength; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    console.log(result);
    return result;
  }
}

module.exports = GameRoom;
