let listeners = [];

export function add(name) {
  return fetch('/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name })
  }).then(notifyListeners);
}

export function remove(id) {
  return fetch(`/todos/${id}`, {
    method: 'DELETE'
  }).then(notifyListeners);
}

export function getAll() {
  return fetch('/todos').then(res => res.json());
}

export function onChange(func) {
  listeners = [...listeners, func];
}

function notifyListeners() {
  listeners.forEach(func => func());
}
