const subscribers = [];

export function publish(event, data) {
  subscribers
    .filter(s => s.event === event)
    .forEach(s => s.handler(data));
}

export function subscribe(event, handler) {
  subscribers.push({ event, handler });
}
