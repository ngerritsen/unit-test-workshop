import * as dice from '../helpers/dice';
import * as scoreService from '../services/scoreService';

export default function game(element, options = {}) {
  function init() {
    if (options.async) {
      element.querySelector('.js-play').addEventListener('click', playAsync);
      return;
    }

    element.querySelector('.js-play').addEventListener('click', play);
  }

  function playAsync() {
    setResultText('Rolling the dice...');
    
    setTimeout(() => {
      dice.rollAsync()
        .then(handleResult);
    }, 1500);
  }

  function play() {
    handleResult(dice.roll());
  }

  function handleResult(result) {
    if (result !== 6) {
      setResultText(`${result}, you lost!`);
      return;
    }

    setResultText('6, you won!');
    scoreService.increment();
  }

  function setResultText(text) {
    element.querySelector('.js-result').textContent = text;
  }

  init();
}
