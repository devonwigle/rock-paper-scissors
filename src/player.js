class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = localStorage.getItem(`${this.name} wins`) || 0;
    this.choice = '';
    this.src = '';
  }
  saveWinsToStorage() {
    localStorage.setItem(`${this.name} wins`, this.wins);
  }
  retrieveWinsFromStorage() {
    this.wins = localStorage.getItem(`${this.name} wins`);
  }
  takeTurn(choice) {
    if (choice) {
      this.choice = choice
      this.src = `./assets/${this.choice}.svg`
    } else if (!choice) {
      this.choice = game.choices[Math.floor(Math.random() * game.choices.length)]
      this.src = `./assets/${this.choice}.svg`
    }
  }
// }if (`game.${players[i]}.choice` === 'children') {
//   `${player[i]}.src = "./assets/children.svg"`
}
