import * as pubSub from '../helpers/pubSub';
import * as scoreService from '../services/scoreService';

export default function scoreBoard(element) {
  function init() {
    pubSub.subscribe('score.updated', update);
    element.querySelector('.js-reset').addEventListener('click', scoreService.reset);
    update(scoreService.getScore());
  }

  function update(score) {
    element.querySelector('.js-score').textContent = `Score: ${score}`;
  }

  init();
}
