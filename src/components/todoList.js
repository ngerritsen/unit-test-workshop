import * as todoService from '../todoService';

export default function todoList(element) {
  function init() {
    update();
    todoService.onChange(update);
    element.addEventListener('change', check);
  }

  function update() {
    todoService.getAll().then(renderTodos);
  }

  function check() {
    if (event.target.classList.contains('js-todo-checkbox')) {
      todoService.remove(event.target.id);
    }
  }

  function renderTodos(todos) {
    element.innerHTML = todos.map((todo) => `
      <li class="list-group-item">
        <div class="form-check">
          <input class="form-check-input js-todo-checkbox mr-4" type="checkbox" id="${todo.id}">
          <label class="form-check-label w-100" for="${todo.id}">
            ${todo.name}
          </label>
        </div>
      </li>
    `).join('');
  }

  init();
}
