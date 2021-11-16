class Game {
  constructor() {
    this.player1 = new Player('Human', './assets/astronaut.svg');
    this.player2 = new Player('Computer', '.assets/computer.svg');
    this.type = null;
    this.choices = [];
    this.winner = null;
  }

  trackData() {
    var classics = ['children', 'parents', 'grandparents'];
    var difficults = ['children', 'parents', 'grandparents', 'difficultchildren', 'difficultparents', 'difficultgrandparents', 'dog', 'cat'];
    if (this.type === 'classic') {
      this.choices = difficults
    } else if (this.type === 'difficult')
    this.choices = difficults
  }

  winConditions() {
    console.log("p1choice", game.player1.choice)
    console.log("p2choice", game.player2.choice)
    if (game.player1.choice === game.player2.choice) {
      this.winner = 'Tie!'
      return 'Tie!'
    } else if (game.player1.choice === 'difficultchildren' && (game.player2.choice !== 'difficultparents') && (game.player2.choice !== 'dog')) {
      this.winner = game.player1.name
      game.player1.wins++
      this.player1.saveWinsToStorage();
      this.player2.saveWinsToStorage();
      return `${game.player1.name} wins!`
    } else if (game.player1.choice === 'difficultparents' && (game.player2.choice !== 'difficultgrandparents') && (game.player2.choice !== 'cat')) {
      this.winner = game.player1.name
      game.player1.wins++
      this.player1.saveWinsToStorage();
      this.player2.saveWinsToStorage();
      return `${game.player1.name} wins!`
    } else if (game.player1.choice === 'difficultgrandparents' && (game.player2.choice !== 'difficultchildren') && (game.player2.choice !== 'cat')) {
      this.winner = game.player1.name
      game.player1.wins++
      this.player1.saveWinsToStorage();
      this.player2.saveWinsToStorage();
      return `${game.player1.name} wins!`
    } else if (game.player1.choice === 'cat' && (game.player2.choice !== 'dog') && (game.player2.choice !== 'difficultchildren')) {
      this.winner = game.player1.name
      game.player1.wins++
      this.player1.saveWinsToStorage();
      this.player2.saveWinsToStorage();
      return `${game.player1.name} wins!`
    } else if (game.player1.choice === 'dog' && (game.player2.choice !== 'difficultparents') && (game.player2.choice !== 'difficultgrandparents')) {
      this.winner = game.player1.name
      game.player1.wins++
      this.player1.saveWinsToStorage();
      this.player2.saveWinsToStorage();
      return `${game.player1.name} wins!`
    }
    this.winner = game.player2.name
    game.player2.wins ++
    this.player1.saveWinsToStorage();
    this.player2.saveWinsToStorage();
    return `${game.player2.name} wins!`

  }

  resetGame() {
    if (game.type === 'classic') {
      showClassicGame()
    } else if (game.type === 'difficult') {
      showDifficultGame()
    }
    addClass([outcomeGameView], 'hidden')
  }

}
