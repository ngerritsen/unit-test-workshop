import scoreBoard from '../scoreBoard';
import * as pubSub from '../../helpers/pubSub';
import * as scoreService from '../../services/scoreService';

jest.mock('../../services/scoreService');

beforeEach(() => {
  document.body.innerHTML = `
    <div class="js-score-board">
      <p class="js-score"></p>
      <button class="btn btn-error js-reset">Reset</button>
    </div>
  `;

  scoreService.getScore.mockReturnValue(4);

  scoreBoard(document.querySelector('.js-score-board'));
});

test('Intially sets the score to the value returned by the score service.', () => {
  expect(getScore()).toBe('Score: 4');
});

test('Clicking reset will reset the score at the score service.', () => {
  clickReset();

  expect(scoreService.reset).toHaveBeenCalled();
});

test('Updates the score when it has been updated.', () => {
  pubSub.publish('score.updated', 3);

  expect(getScore()).toBe('Score: 3');
});

function getScore() {
  return document.querySelector('.js-score').textContent;
}

function clickReset() {
  document.querySelector('.js-reset').click();
}
