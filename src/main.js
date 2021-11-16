//variables
var game = new Game();
var player1Outcome = document.querySelector('.player1-outcome');
var player2Outcome = document.querySelector('.player2-outcome');
var humanWins = document.querySelector('.human-wins');
var computerWins = document.querySelector('.computer-wins');
var players = ['player1', 'player2'];
var tagline = document.querySelector('h2');
var tokenBox = document.querySelector('.token-box');
//views
var difficultySelectorView = document.querySelector('.difficulty-selector-view');
var classicGameView = document.querySelector('.classic-game-view');
var difficultGameView = document.querySelector('.difficult-game-view');
var outcomeGameView = document.querySelector('.outcome-game-view');
//buttons
var difficultDifficultyButton = document.querySelector('.difficult-difficulty-selector');
var classicDifficultyButton = document.querySelector('.classic-difficulty-selector');
var clearWins = document.querySelector('#clearWins');
var changeDifficulty = document.querySelector('#changeDifficulty')
var gameControlBox = document.querySelector('.game-control-box');
var childrenButton = document.querySelector('#children');
var parentsButton = document.querySelector('#parents');
var grandparentsButton = document.querySelector('#grandparents');
var difficultChildrenButton = document.querySelector('#difficultChildren');
var difficultParentsButton = document.querySelector('#difficultParents');
var difficultGrandparentsButton = document.querySelector('#difficultGrandparents');
var catButton = document.querySelector('#cat');
var dogButton = document.querySelector('#dog');
var tokenBox = document.querySelectorAll('.token-box')
// tokens
var childrenToken = document.querySelector('#childrenToken');
var parentsToken = document.querySelector('#parentsToken');
var grandparentsToken = document.querySelector('#grandparentsToken');
var difficultChildrenToken = document.querySelector('#difficultChildrenToken');
var difficultParentsToken = document.querySelector('#difficultParentsToken');
var difficultGrandparentsToken = document.querySelector('#difficultGrandparentsToken');
//eventListeners
classicDifficultyButton.addEventListener('click', showClassicGame);
difficultDifficultyButton.addEventListener('click', showDifficultGame);
changeDifficulty.addEventListener('click', showDifficultySelector);
clearWins.addEventListener('click', clearLocalWins);
childrenButton.addEventListener('click', function() {
  showOutcome('children');
});
parentsButton.addEventListener('click', function() {
  showOutcome('parents')
});
grandparentsButton.addEventListener('click', function() {
  showOutcome('grandparents')
});
difficultChildrenButton.addEventListener('click', function() {
  showOutcome('difficultChildren')
});
difficultParentsButton.addEventListener('click', function() {
  showOutcome('difficultParents')
});
difficultGrandparentsButton.addEventListener('click', function() {
  showOutcome('difficultGrandparents')
});
catButton.addEventListener('click', function() {
  showOutcome('cat')
});
dogButton.addEventListener('click', function() {
  showOutcome('dog')
});
window.addEventListener('load', function() {
  game = new Game();
  humanWins.innerText = `Wins: ${game.player1.wins}`;
  computerWins.innerText = `Wins: ${game.player2.wins}`;
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
  addClass([classicGameView, difficultySelectorView, outcomeGameView], 'hidden');
  removeClass([difficultGameView], 'hidden');
  tagline.innerText = "Choose your family member"
  game.type = 'difficult';
  game.trackData();
};

function showDifficultySelector() {
  tagline.innerText = "Choose your family"
  removeClass([difficultySelectorView], 'hidden');
  addClass([gameControlBox, classicGameView, difficultGameView, outcomeGameView], 'hidden');
};

function showOutcome(choice) {
  game.player1.takeTurn(choice);
  game.player2.takeTurn();
  showToken(`${choice}Token`);
  setTimeout(changeViewability, 1000);
  setTimeout(updateInfo, 1000);
  setTimeout(game.resetGame, 3000);
};

function showToken(choice) {
  var tokenPlace = document.querySelector(`#${choice}`);
  tokenPlace.src = `./assets/astronaut.svg`;
  for ( var i = 0; i < tokenBox.length; i++) {
    removeClass([tokenBox[i]], 'hidden');
  }
};

function hideToken(choice) {
  var tokenPlace = document.querySelector(`#${choice}`);
  tokenPlace.src = `./assets/astronaut.svg`;
  addClass([tokenBox], 'hidden');
};

function updateInfo() {
  // hideToken(`${choice}Token`);
  tagline.innerText = game.winConditions();
  humanWins.innerText = `Wins: ${game.player1.wins}`;
  computerWins.innerText = `Wins: ${game.player2.wins}`;
  player1Outcome.src = `${game.player1.src}`;
  player2Outcome.src = `${game.player2.src}`;
};

function changeViewability() {
  // hideToken(`${choice}Token`);
  removeClass([outcomeGameView, gameControlBox], 'hidden');
  addClass([classicGameView, difficultGameView], 'hidden');
};

function clearLocalWins() {
  localStorage.clear();
  game = new Game();
  humanWins.innerText = `Wins: ${game.player1.wins}`;
  computerWins.innerText = `Wins: ${game.player2.wins}`;
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
