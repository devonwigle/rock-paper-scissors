class Game {
  constructor(player, difficultyLevel) {
    this.player = player;
    this.type = difficultyLevel;
  }
  trackData() {

  }
  winConditions() {
    // ties
    // grandparent beats grandparent
    // parent beats children
    // children beats grandparents

    // decide on difficult settings
  }
  timeOut() {
    //resets board to begin new game
  }
}
