const Settings = require("./Settings");
const GameStates = require("./enums/GameStates");
const ServerRoles = require("./enums/ServerRoles");
const Player = require("./Player");

class GameRoom {
  constructor(creatorNick) {
    this.idLength = Settings.IDlen;
    this.gameID = Settings.generateID();
    this.gameState = GameStates.LOBBY;

    this.playersInRoom = new Array();
    playersInRoom.push(
      new Player(creatorNick, this.playersInRoom.length, ServerRoles.ADMIN)
    );
  }

  isPlayerInRoom(nick) {
    this.playersInRoom.forEach(player => {
      if (player.nick == nick) return true;
    });
    return false;
  }

  addPlayer(nick) {
    if (this.searchForPlayer(nick))
      playersInRoom.push(
        new Player(nick, this.playersInRoom.length, ServerRoles.PLAYER)
      );
    else {
      //TODO: inform user that there is player with such a nick !
    }
  }

  removePlayer(nick) {
    this.playersInRoom.forEach(player => {
      if (player.nick == nick) {
        this.playersInRoom.splice(player.id, 1)
      }
    });
  }
}

module.exports = GameRoom;
