import game from './components/game';
import scoreBoard from './components/scoreBoard';

game(document.querySelector('.js-dice-game'));
gameAsync(document.querySelector('.js-dice-game-async'));
scoreBoard(document.querySelector('.js-score-board'));
