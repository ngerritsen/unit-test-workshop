const express = require('express');
const fs = require('fs');
const shortid = require('shortid');

const PORT = 8082;

const app = express();

app.use(express.json());
app.use(express.static('public'))

app.get('/todos', function (req, res) {
  res.json(getTodos());
});

app.post('/todos', function (req, res) {
  saveTodos([...getTodos(), { ...req.body, id: shortid.generate() }]);
  res.json({ message: 'Success' });
});

app.delete('/todos/:id', function (req, res) {
  saveTodos(getTodos().filter(todo => todo.id !== req.params.id));
  res.json({ message: 'Success' });
});

function getTodos() {
  try {
    return JSON.parse(fs.readFileSync('./todos.json', 'utf-8'));
  } catch(e) {
    return [];
  }
}

function saveTodos(todos) {
  fs.writeFileSync('./todos.json', JSON.stringify(todos));
}

app.listen(PORT, () => {
  console.log(`Todo API started at http://localhost:${PORT}.`);
});
