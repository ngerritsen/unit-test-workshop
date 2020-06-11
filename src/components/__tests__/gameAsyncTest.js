import flushPromises from 'flush-promises';
import gameAsync, { WINNING_NUMBER } from '../gameAsync';
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

  jest.resetAllMocks();

  gameAsync(document.querySelector('.js-dice-game'));
});

test('If dice rolls 6, shows waiting message, then shows winning message.', async () => {
  dice.rollAsync.mockResolvedValue(6);
  jest.useFakeTimers();

  clickPlay();

  expect(getResultText()).toBe('Rolling the dice...');

  jest.runOnlyPendingTimers();
  await flushPromises();

  expect(getResultText()).toBe('6, you won!');
});

test('If dice does not roll 6, shows waiting message, then shows losing message.', async () => {
  dice.rollAsync.mockResolvedValue(5);
  jest.useFakeTimers();

  clickPlay();

  expect(getResultText()).toBe('Rolling the dice...');

  jest.runOnlyPendingTimers();
  await flushPromises();

  expect(getResultText()).toBe('5, you lost!');
});

test('If won, increments the score.', async () => {
  dice.rollAsync.mockResolvedValue(6);
  jest.useFakeTimers();

  clickPlay();

  jest.runOnlyPendingTimers();
  await flushPromises();

  expect(scoreService.increment).toHaveBeenCalled();
});

test('If won, increments the score only once.', async () => {
  dice.rollAsync.mockResolvedValue(6);
  jest.useFakeTimers();

  clickPlay();

  jest.runOnlyPendingTimers();
  await flushPromises();

  expect(scoreService.increment).toHaveBeenCalledTimes(1);
});

test('If lost, does not increment the score.', async () => {
  dice.rollAsync.mockResolvedValue(5);
  jest.useFakeTimers();

  clickPlay();

  jest.runOnlyPendingTimers();
  await flushPromises();

  expect(scoreService.increment).not.toHaveBeenCalled();
});

function getResultText() {
  return document.querySelector('.js-result').textContent;
}

function clickPlay() {
  document.querySelector('.js-play').click();
}
