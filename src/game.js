class Game {
  constructor(difficultyLevel) {
    this.player1 = new Player('Human', './assets/astronaut.svg');
    this.player2 = new Player('Computer', '.assets/computer.svg')
    this.type = difficultyLevel;
    this.choices = [];
    this.winner = null;
  }

  play() {
    if (this.type === 'classic') {
      this.choices.push('children', 'parents', 'grandparents')
    }
    this.choices.push('children', 'parents', 'grandparents', 'dog', 'cat')
  }

  trackData() {

  }
  winConditions(humanChoice, computerChoice) {
    if (player1.choice === player2.choice) {
      this.winner = 'Tie!'
      return 'Tie!'
    } else if (player1.choice === 'children' && (player2.choice !== 'parents' || player2.choice !== 'dog')) {
      this.winner = player1.name
      player1.wins ++
      return `${game.player1.name} wins!`
    } else if (player1.choice === 'parents' && (player2.choice !== 'grandparents' ||  player2.choice !== 'cat')) {
      this.winner = player1.name
      player1.wins ++
      return `${game.player1.name} wins!`
    } else if (player1.choice === 'grandparents' && (player2.choice !== 'children' || player2.choice !== 'cat')) {
      this.winner = player1.name
      player1.wins ++
      return `${game.player1.name} wins!`
    } else if (player1.choice === 'cat' && (player2.choice !== 'dog' || player2.choice !== 'children')) {
      this.winner = player1.name
      player1.wins ++
      return `${game.player1.name} wins!`
    } else if (player1.choice === 'dog' && (player2.choice !== 'parents' || player2.choice !== 'grandparents')) {
      this.winner = player1.name
      player1.wins ++
      return `${game.player1.name} wins!`
    }
    this.winner = player2.name
    player2.wins ++
    return `${game.player2.name} wins!`

  }
  timeOut() {
    //resets board to begin new game
  }
}
