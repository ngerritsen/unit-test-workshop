import gameAsync, { WINNING_NUMBER } from '../gameAsync';

beforeEach(() => {
  document.body.innerHTML = `
    <div class="js-dice-game">
      <p class="js-result">Roll the dice.</p>
      <button class="js-play">Roll the dice</button>
    </div>
  `;

  gameAsync(document.querySelector('.js-dice-game'));
});

test('If dice rolls 6, shows waiting message, then shows winning message.', () => {
  // Hint: there are two async effects at play that need to be dealt with!
});

test('If dice does not roll 6, shows waiting message, then shows losing message.', () => {
});

test('If won, increments the score.', () => {
  // Hint: keep an eye on the score service...
});

test('If won, increments the score only once.', () => {
  // Hint: when does a mock... die?
});

test('If lost, does not increment the score.', () => {
});

function getResultText() {
  return document.querySelector('.js-result').textContent;
}

function clickPlay() {
  document.querySelector('.js-play').click();
}
