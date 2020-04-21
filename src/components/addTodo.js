import * as todoService from '../todoService';

function addTodo(element) {
  function init() {
    element.addEventListener('submit', submit);
  }

  function submit(event) {
    event.preventDefault();

    const name = getNameField().value.trim();

    if (name) {
      todoService.add(name)
        .then(() => {
          getNameField().value = '';
        });
    }
  }

  function getNameField() {
    return element.querySelector('#name');
  }

  init();
}

export default addTodo;
