//variables
var game = new Game();
var player1Outcome = document.querySelector('.player1-outcome');
var player2Outcome = document.querySelector('.player2-outcome');
var humanWins = document.querySelector('.human-wins');
var computerWins = document.querySelector('.computer-wins');
var players = ['player1', 'player2'];
var tagline = document.querySelector('h2');
//tokens
var childrenToken = document.querySelector('#childrenToken');
var parentsToken = document.querySelector('#parentsToken');
var grandparentsToken = document.querySelector('#grandparentsToken');
var difficultChildrenToken = document.querySelector('#difficultchildrenToken');
var difficultParentsToken = document.querySelector('#difficultparentsToken');
var difficultGrandparentsToken = document.querySelector('#difficultgrandparentsToken');
var catToken = document.querySelector('#catToken');
var dogToken = document.querySelector('#dogToken');
//views
var difficultySelectorView = document.querySelector('.difficulty-selector-view');
var classicGameView = document.querySelector('.classic-game-view');
var difficultGameView = document.querySelector('.difficult-game-view');
var outcomeGameView = document.querySelector('.outcome-game-view');
//buttons
var difficultDifficultyButton = document.querySelector('.difficult-difficulty-selector');
var classicDifficultyButton = document.querySelector('.classic-difficulty-selector');
var gameControlBox = document.querySelector('.game-control-box');
var changeDifficultyButton = document.querySelector('#changeDifficulty')
var childrenButton = document.querySelector('#children');
var parentsButton = document.querySelector('#parents');
var grandparentsButton = document.querySelector('#grandparents');
var difficultChildrenButton = document.querySelector('#difficultchildren');
var difficultParentsButton = document.querySelector('#difficultparents');
var difficultGrandparentsButton = document.querySelector('#difficultgrandparents');
var catButton = document.querySelector('#cat');
var dogButton = document.querySelector('#dog');
// tokens
var childrenToken = document.querySelector('#childrenToken');
var parentsToken = document.querySelector('#parentsToken');
var grandparentsToken = document.querySelector('#grandparentsToken');
var difficultchildrenToken = document.querySelector('#difficultchildrenToken');
var difficultparentsToken = document.querySelector('#difficultparentsToken');
var difficultgrandparentsToken = document.querySelector('#difficultgrandparentsToken');
//eventListeners
classicDifficultyButton.addEventListener('click', showClassicGame);
difficultDifficultyButton.addEventListener('click', showDifficultGame);
changeDifficultyButton.addEventListener('click', showDifficultySelector);
childrenButton.addEventListener('click', function() {
  showOutcome('children')
});
parentsButton.addEventListener('click', function() {
  showOutcome('parents')
});
grandparentsButton.addEventListener('click', function() {
  showOutcome('grandparents')
});
difficultChildrenButton.addEventListener('click', function() {
  showOutcome('difficultchildren')
});
difficultParentsButton.addEventListener('click', function() {
  showOutcome('difficultparents')
});
difficultGrandparentsButton.addEventListener('click', function() {
  showOutcome('difficultgrandparents')
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

function showClassicGame() {
  addClass([difficultySelectorView, catButton, dogButton], 'hidden');
  removeClass([difficultGameView], 'hidden');
  tagline.innerText = "Choose your family member"
  game.type = 'classic'
  game.trackData();
};

function showDifficultGame() {
  addClass([classicGameView, difficultySelectorView, outcomeGameView], 'hidden');
  removeClass([difficultGameView, catButton, dogButton], 'hidden');
  tagline.innerText = "Choose your family member"
  game.type = 'difficult';
  game.trackData();
};

function showDifficultySelector() {
  tagline.innerText = "Choose your family"
  removeClass([difficultySelectorView], 'hidden');
  addClass([classicGameView, difficultGameView, outcomeGameView], 'hidden');
  addClass([gameControlBox], 'invisible')
};

function showOutcome(choice) {
  game.player1.takeTurn(choice);
  game.player2.takeTurn();
  showToken(`${choice}Token`);
  callTimeouts(`${choice}Token`);
};

function callTimeouts(choice) {
  setTimeout(changeViewability, 300);
  setTimeout(updateInfo, 300, choice);
  setTimeout(game.resetGame, 1000);
};

function showToken(choice) {
  if (childrenToken.id === `${choice}`) {
    removeClass([childrenToken], 'invisible')
  } else if (parentsToken.id === `${choice}`) {
    removeClass([parentsToken], 'invisible')
  } else if (grandparentsToken.id === `${choice}`) {
    removeClass([grandparentsToken], 'invisible')
  } else if (difficultchildrenToken.id === `${choice}`) {
    removeClass([difficultchildrenToken], 'invisible')
  } else if (difficultparentsToken.id === `${choice}`) {
    removeClass([difficultparentsToken], 'invisible')
  } else if (difficultgrandparentsToken.id === `${choice}`) {
    removeClass([difficultgrandparentsToken], 'invisible')
  } else if (catToken.id === `${choice}`) {
    removeClass([catToken], 'invisible')
  } else if (dogToken.id === `${choice}`) {
    removeClass([dogToken], 'invisible')
  }
};

function hideToken(choice) {
  if (childrenToken.id === `${choice}`) {
    addClass([childrenToken], 'invisible')
  } else if (parentsToken.id === `${choice}`) {
    addClass([parentsToken], 'invisible')
  } else if (grandparentsToken.id === `${choice}`) {
    addClass([grandparentsToken], 'invisible')
  } else if (difficultchildrenToken.id === `${choice}`) {
    addClass([difficultchildrenToken], 'invisible')
  } else if (difficultparentsToken.id === `${choice}`) {
    addClass([difficultparentsToken], 'invisible')
  } else if (difficultgrandparentsToken.id === `${choice}`) {
    addClass([difficultgrandparentsToken], 'invisible')
  } else if (catToken.id === `${choice}`) {
    addClass([catToken], 'invisible')
  } else if (dogToken.id === `${choice}`) {
    addClass([dogToken], 'invisible')
  }
};

function updateInfo(choice) {
  hideToken(choice);
  tagline.innerText = game.winConditions();
  humanWins.innerText = `Wins: ${game.player1.wins}`;
  computerWins.innerText = `Wins: ${game.player2.wins}`;
  player1Outcome.src = `${game.player1.src}`;
  player2Outcome.src = `${game.player2.src}`;
};

function changeViewability() {
  removeClass([outcomeGameView], 'hidden');
  removeClass([gameControlBox], 'invisible')
  addClass([classicGameView, difficultGameView], 'hidden');
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
