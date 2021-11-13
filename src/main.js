//variables
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

var gameWinner = document.querySelector('.game-winner')

//eventListeners
classicDifficultyButton.addEventListener('click', showClassicGame);
difficultDifficultyButton.addEventListener('click', showDifficultGame);
changeDifficulty.addEventListener('click', showDifficultySelector);
childrenButton.addEventListener('click', function() {
  game.player1.play()
});
parentsButton.addEventListener('click', showOutcome);
grandparentsButton.addEventListener('click', showOutcome);
catButton.addEventListener('click', showOutcome);
dogButton.addEventListener('click', showOutcome);
//functions
function showClassicGame() {
  addClass(difficultySelectorView, 'hidden');
  removeClass(classicGameView, 'hidden');
};

function showDifficultGame() {
  addClass(difficultySelectorView, 'hidden');
  removeClass(classicGameView, 'hidden');
  removeClass(difficultGameView, 'hidden');
}

function showDifficultySelector() {
  removeClass(difficultySelectorView, 'hidden');
  addClass(classicGameView, 'hidden');
  addClass(difficultGameView, 'hidden');
};

function showOutcome() {
  game.player1.takeTurn(choice);
  game.player2.takeTurn();
  gameWinner.innerText = game.winConditions();
  removeClass(outcomeGameView, 'hidden');
  addClass(classicGameView, 'hidden');
  addClass(difficultGameView, 'hidden');
};

function removeClass(element, rule) {
  element.classList.remove(rule)
};

function addClass(element, rule) {
  element.classList.add(rule)
};
