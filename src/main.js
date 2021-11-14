//variables
var game = new Game()
var gameWinner = document.querySelector('.game-winner');
var selectedImageBox = document.querySelector('.selected-image-box');
var humanWins = document.querySelector('.human-wins');
var computerWins = document.querySelector('.computer-wins');
var players = ['player1', 'player2'];
var tagline = document.querySelector('h2');
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
  addClass([difficultySelectorView], 'hidden');
  removeClass([classicGameView], 'hidden');
  tagline.innerText = "Choose your family member"
  game.type = 'classic'
  game.trackData();
};

function showDifficultGame() {
  addClass([difficultySelectorView], 'hidden');
  removeClass([classicGameView, difficultGameView], 'hidden');
  tagline.innerText = "Choose your family member"
  game.type = 'difficult';
  game.trackData();
}

function showDifficultySelector() {
  tagline.innerText = "Choose your family"
  removeClass([difficultySelectorView], 'hidden');
  addClass([changeDifficulty, gameWinner, classicGameView, difficultGameView], 'hidden');
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
  removeClass([outcomeGameView, changeDifficulty], 'hidden');
  addClass([classicGameView, tagline, difficultGameView], 'hidden');
};

function removeClass(elements, rule) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove(rule)
  }
};

function addClass(elements, rule) {
  for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add(rule)
  }
};
