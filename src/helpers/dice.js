export function roll() {
  return Math.ceil(Math.random() * 6);
}

export function rollAsync() {
  return Promise.resolve(roll());
}
