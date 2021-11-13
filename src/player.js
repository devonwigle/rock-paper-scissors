class Player {
  constructor(name, token, wins) {
    this.name = name;
    this.token = token;
    this.wins = wins || 0;
    this.choice = '';
  }
  saveWinsToStorage() {

  }
  retrieveWinsFromStorage() {

  }
  takeTurn(choice) {
    if (choice) {
      this.choice = choice
    } else if (!choice) {
      var chosenIndex = Math.floor(Math.random() * game.choices.length);
      this.choice = game.choices[chosenIndex]
    }
  }
}
