export function getPercentage() {
  return Math.round(Math.random() * 100);
}

export function onLowFuel(callback) {
  setTimeout(callback, 10000000);
}
