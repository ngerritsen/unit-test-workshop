import game from './components/game';
import scoreBoard from './components/scoreBoard';

game(document.querySelector('.js-dice-game'));
game(document.querySelector('.js-dice-game-async'), { async: true });
scoreBoard(document.querySelector('.js-score-board'));
