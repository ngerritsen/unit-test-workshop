export function roll() {
  return Math.ceil(Math.random() * 6);
}

export async function rollAsync() {
  return roll();
}
