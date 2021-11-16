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
      if (game.type === 'classic') {
        this.choice = game.choices[Math.floor(Math.random() * 3)]
        console.log("computer", this.choice)
      } else if (game.type === 'difficult') {
        this.choice = game.choices[Math.floor(Math.random() * 5 + 3)]
        this.src = `./assets/${this.choice}.svg`
      }
    }
  }
}
