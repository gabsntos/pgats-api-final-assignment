const noteService = require('../services/noteService');

exports.createNote = (req, res) => {
  const { content } = req.body;
  const note = noteService.addNote(content);
  res.status(201).json(note);
};

exports.getNotes = (req, res) => {
  res.json(noteService.getNotes());
};
