//variables
var difficultySelectorView = document.querySelector('.difficulty-selector-view');
var classicGameView = document.querySelector('.classic-game-view');
var difficultGameView = document.querySelector('.difficult-game-view')
var difficultDifficultyButton = document.querySelector('.difficult-difficulty-selector');
var classicDifficultyButton = document.querySelector('.classic-difficulty-selector');
var difficultGameView = document.querySelector('.difficult-game-view');
//eventListeners
classicDifficultyButton.addEventListener('click', showClassicGame);
difficultDifficultyButton.addEventListener('click', showDifficultGame);
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


function removeClass(element, rule) {
  element.classList.remove(rule)
};

function addClass(element, rule) {
  element.classList.add(rule)
};
