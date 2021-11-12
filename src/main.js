//variables
//views
var difficultySelectorView = document.querySelector('.difficulty-selector-view');
var classicGameView = document.querySelector('.classic-game-view');
var difficultGameView = document.querySelector('.difficult-game-view')
var difficultGameView = document.querySelector('.difficult-game-view');
//buttons
var difficultDifficultyButton = document.querySelector('.difficult-difficulty-selector');
var classicDifficultyButton = document.querySelector('.classic-difficulty-selector');
var changeDifficulty = document.querySelector('.change-difficulty')
// players
var computer = new Player('Computer', './assets/computer.svg')
var human = new Player('Human', './assets/astronaut.svg')
//eventListeners
classicDifficultyButton.addEventListener('click', showClassicGame);
difficultDifficultyButton.addEventListener('click', showDifficultGame);
changeDifficulty.addEventListener('click', showDifficultySelector)
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
}

function removeClass(element, rule) {
  element.classList.remove(rule)
};

function addClass(element, rule) {
  element.classList.add(rule)
};
