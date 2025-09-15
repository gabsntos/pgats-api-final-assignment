const noteService = require('../services/noteService');

exports.createNote = (req, res) => {
  const { content } = req.body;
  const result = noteService.addNote(content);
  if (result.error) {
    return res.status(400).json(result);
  }
  res.status(201).json(result);
};

exports.getNotes = (req, res) => {
  const result = noteService.getNotes();
  if (result.message) {
    return res.status(200).json(result);
  }
  res.json(result);
};

exports.deleteNote = (req, res) => {
  const id = Number(req.params.id);
  const result = noteService.deleteNoteById(id);
  if (result.error) {
    return res.status(404).json(result);
  }
  res.json(result);
};
