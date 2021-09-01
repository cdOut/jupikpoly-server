class Settings {
  static IDlen = 30;

  static generateID() {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < this.IDlen; ++i) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    console.log(result);
    return result;
  }
}

module.exports = Settings;
