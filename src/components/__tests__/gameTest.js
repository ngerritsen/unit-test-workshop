import game from '../game';
import * as dice from '../../helpers/dice';

jest.mock('../../helpers/dice');

beforeEach(() => {
  document.body.innerHTML = `
    <div class="js-dice-game">
      <p class="js-result">Roll the dice...</p>
      <button class="js-play">Roll the dice</button>
    </div>
  `;

  game(document.querySelector('.js-dice-game'));
});

test('If dice rolls 6, shows winning message.', () => {
  // Hint: we cannot trust the dice.
});

test('If dice does not roll 6, shows losing message.', () => {
});

test('If won, increments the score.', () => {
  // Hint: keep an eye on the score service...
});

test('If won, increments the score only once.', () => {
  // Hint: when does a mock... die?
});

test('If lost, does not increment the score.', () => {
});

describe('Async', () => {
  beforeEach(() => {
    game(document.querySelector('.js-dice-game'), { async: true });
  });
 
  test('Shows the waiting message, then shows winning message.', () => {
      // Hint: don't use real timeouts in tests.
  });
});

function getResultText() {
  return document.querySelector('.js-result').textContent;
}

function clickPlay() {
  document.querySelector('.js-play').click();
}
