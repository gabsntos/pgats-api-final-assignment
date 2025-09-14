exports.getTasks = (req, res) => {
  // Example static tasks
  res.json([
    { id: 1, title: 'Buy groceries' },
    { id: 2, title: 'Read a book' }
  ]);
};
