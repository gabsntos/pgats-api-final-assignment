const { tasks } = require('../models/task');

exports.getTasks = () => {
  // Edge case: No tasks
  if (tasks.length === 0) return [];
  return tasks;
};
