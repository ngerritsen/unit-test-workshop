import * as pubSub from '../helpers/pubSub';

export function increment() {
  const newScore = getScore() + 1;

  localStorage.setItem('score', newScore);
  pubSub.publish('score.updated', newScore);
}

export function reset() {
  localStorage.setItem('score', 0);
  pubSub.publish('score.updated', 0);
}

export function getScore() {
  return Number(localStorage.getItem('score') || 0);
}
