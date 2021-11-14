//variables
var game = new Game()
var gameWinner = document.querySelector('.game-winner');
var selectedImageBox = document.querySelector('.selected-image-box');
var humanWins = document.querySelector('.human-wins');
var computerWins = document.querySelector('.computer-wins');
var players = ['player1', 'player2'];
//views
var difficultySelectorView = document.querySelector('.difficulty-selector-view');
var classicGameView = document.querySelector('.classic-game-view');
var difficultGameView = document.querySelector('.difficult-game-view');
var outcomeGameView = document.querySelector('.outcome-game-view')
//buttons
var difficultDifficultyButton = document.querySelector('.difficult-difficulty-selector');
var classicDifficultyButton = document.querySelector('.classic-difficulty-selector');
var changeDifficulty = document.querySelector('.change-difficulty')
var childrenButton = document.querySelector('#children');
var parentsButton = document.querySelector('#parents');
var grandparentsButton = document.querySelector('#grandparents');
var catButton = document.querySelector('#cat');
var dogButton = document.querySelector('#dog');


//eventListeners
classicDifficultyButton.addEventListener('click', showClassicGame);
difficultDifficultyButton.addEventListener('click', showDifficultGame);
changeDifficulty.addEventListener('click', showDifficultySelector);
childrenButton.addEventListener('click', function() {
  showOutcome('children')
});
parentsButton.addEventListener('click', function() {
  showOutcome('parents')
});
grandparentsButton.addEventListener('click', function() {
  showOutcome('grandparents')
});
catButton.addEventListener('click', function() {
  showOutcome('cat')
});
dogButton.addEventListener('click', function() {
  showOutcome('dog')
});

//functions
function showClassicGame() {
  addClass(difficultySelectorView, 'hidden');
  removeClass(classicGameView, 'hidden');
  game.type = 'classic'
  game.trackData();
};

function showDifficultGame() {
  addClass(difficultySelectorView, 'hidden');
  removeClass(classicGameView, 'hidden');
  removeClass(difficultGameView, 'hidden');
  game.type = 'difficult';
  game.trackData();
}

function showDifficultySelector() {
  removeClass(difficultySelectorView, 'hidden');
  addClass(changeDifficulty, 'hidden');
  addClass(gameWinner, 'hidden');
  addClass(classicGameView, 'hidden');
  addClass(difficultGameView, 'hidden');
};

function showOutcome(choice) {
  selectedImageBox = ''
  var p1Image = game.player1.src
  game.player1.takeTurn(choice);
  game.player2.takeTurn();
  gameWinner.innerText = game.winConditions();
  humanWins.innerText = `Wins: ${game.player1.wins}`;
  computerWins.innerText = `Wins: ${game.player2.wins}`;
  selectedImageBox.innerHTML = `
    <img class="game-button" src="${game.player1.src}"
    <img class="game-button" src="${game.player2.src}"
  `
  removeClass(outcomeGameView, 'hidden');
  removeClass(changeDifficulty, 'hidden');
  addClass(classicGameView, 'hidden');
  addClass(difficultGameView, 'hidden');
};

// function pathOfSelectedImages() {
//   for (var i = 0; i < players.length; i++) {
//     if (`game.${players[i]}.choice` === 'children') {
//       `${player[i]}.src = "./assets/children.svg"`
//     }
//   }
// }

function removeClass(element, rule) {
  element.classList.remove(rule)
};

function addClass(element, rule) {
  element.classList.add(rule)
};
