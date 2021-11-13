class Player {
  constructor(name, token, wins) {
    this.name = name;
    this.token = token;
    this.wins = wins || 0;
    this.choice = null;
  }
  saveWinsToStorage() {

  }
  retrieveWinsFromStorage() {

  }
  takeTurn(choice) {
    if (!choice) {
      var chosenIndex = Math.floor(Math.random() * game.choices.length)
      this.choice = game.choices[chosenIndex]
    }
    //run random math if computer
    //click a button if human
  }
}
