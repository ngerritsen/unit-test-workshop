import * as dice from '../helpers/dice';
import * as scoreService from '../services/scoreService';

const ROLL_TIME = 1000;
export const WINNING_NUMBER = 6;

export default function gameAsync(element) {
  function init() {
    element.querySelector('.js-play').addEventListener('click', play);
  }

  function play() {
    setResultText('Rolling the dice...');

    setTimeout(() => {
      dice.rollAsync()
        .then(handleResult);
    }, ROLL_TIME);
  }

  function handleResult(result) {
    if (result !== WINNING_NUMBER) {
      setResultText(`${result}, you lost!`);
      return;
    }

    setResultText(`${WINNING_NUMBER}, you won!`);
    scoreService.increment();
  }

  function setResultText(text) {
    element.querySelector('.js-result').textContent = text;
  }

  init();
}
