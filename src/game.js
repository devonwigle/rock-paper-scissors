class Game {
  constructor(difficultyLevel) {
    this.player1 = new Player('Human', './assets/astronaut.svg');
    this.player2 = new Player('Computer', '.assets/computer.svg')
    this.type = difficultyLevel;
    this.choices = [];
    this.winner = null;
  }

  play() {
    if (this.type = 'classic') {
      this.choices.push('children', 'parents', 'grandparents')
    }
    this.choices.push('children', 'parents', 'grandparents', 'dog', 'cat')
  }
  
  trackData() {

  }
  winConditions(humanChoice, computerChoice) {
    if(children.clicked && !parents.clicked && !dog.clicked) {

    } else if (parents.clicked && !grandparents.clicked && !cat.clicked) {

    } else if (grandparents.clicked && !children.clicked && !cat.clicked) {

    } else if (cat.clicked && !dog.clicked && !children.clicked) {

    } else if (dog.clicked && !parents.clicked && !grandparents.clicked)
  // ties

  }
  timeOut() {
    //resets board to begin new game
  }
}
