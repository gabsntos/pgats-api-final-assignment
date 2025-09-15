const taskService = require('../services/taskService');

exports.getTasks = (req, res) => {
  const tasks = taskService.getTasks();
  res.json(tasks);
};
