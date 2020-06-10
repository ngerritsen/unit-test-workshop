import scoreBoard from '../scoreBoard';

beforeEach(() => {
  document.body.innerHTML = `
    <div class="js-score-board">
      <p class="js-score"></p>
      <button class="btn btn-error js-reset">Reset</button>
    </div>
  `;

  scoreBoard(document.querySelector('.js-score-board'));
});

test('Intially sets the score to the correct value.', () => {
  // Hint: who was first, the chicken or the egg?
});

test('Clicking reset will reset the score.', () => {
  // Hint: should be easy for you now
});

test('Updates the score when it has been updated.', () => {
  // Hint: to mock or not to mock?
});

function getScore() {
  return document.querySelector('.js-score').textContent;
}

function clickReset() {
  document.querySelector('.js-play').click();
}
