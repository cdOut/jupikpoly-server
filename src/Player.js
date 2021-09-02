class Player {
  constructor(nick, id, serverRole) {
    this.serverRole;
    this.nick = nick;
    this.id = id;
    this.money = 1500;
    this.spaceOnTheBoard = 0;
    this.x;
    this.y;
  }
}

module.exports = Player;
