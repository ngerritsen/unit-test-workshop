import * as dice from '../helpers/dice';
import * as scoreService from '../services/scoreService';

export default function game(element) {
  function init() {
    element.querySelector('.js-play').addEventListener('click', play);
  }

  function play() {
    const result = dice.roll();
    const resultElement = element.querySelector('.js-result');

    if (result === 6) {
      resultElement.textContent = '6, you won!';
      scoreService.increment();
      return;
    }

    resultElement.textContent = `${result}, you lost!`;
  }

  init();
}
