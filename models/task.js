// In-memory storage and Task model
class Task {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }
}

const tasks = [
  new Task(1, 'Buy groceries'),
  new Task(2, 'Read a book')
];

module.exports = { Task, tasks };
