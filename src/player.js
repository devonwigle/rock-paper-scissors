class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
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
      this.choice = game.choices[Math.floor(Math.random() * game.choices.length)]
    }
  }
}
