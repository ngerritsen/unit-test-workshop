import game, { WINNING_NUMBER } from '../game';
import * as dice from '../../helpers/dice';
import * as scoreService from '../../services/scoreService';

jest.mock('../../helpers/dice');
jest.mock('../../services/scoreService');

beforeEach(() => {
  document.body.innerHTML = `
    <div class="js-dice-game">
      <p class="js-result">Roll the dice.</p>
      <button class="js-play">Roll the dice</button>
    </div>
  `;

  game(document.querySelector('.js-dice-game'));

  jest.resetAllMocks();
});

test('If dice rolls 6, shows winning message.', () => {
  dice.roll.mockReturnValue(6);

  clickPlay();

  expect(getResultText()).toBe('6, you won!');
});

test('If dice does not roll 6, shows losing message.', () => {
  dice.roll.mockReturnValue(5);

  clickPlay();

  expect(getResultText()).toBe('5, you lost!');
});

test('If won, increments the score.', () => {
  dice.roll.mockReturnValue(6);

  clickPlay();

  expect(scoreService.increment).toHaveBeenCalled();
});

test('If won, increments the score only once.', () => {
  dice.roll.mockReturnValue(6);

  clickPlay();

  expect(scoreService.increment).toHaveBeenCalledTimes(1);
});

test('If lost, does not increment the score.', () => {
  dice.roll.mockReturnValue(5);

  clickPlay();

  expect(scoreService.increment).not.toHaveBeenCalled();
});

function getResultText() {
  return document.querySelector('.js-result').textContent;
}

function clickPlay() {
  document.querySelector('.js-play').click();
}
