const { Note, notes } = require('../models/note');

exports.addNote = (content) => {
  // Edge case: content is missing or not a string
  if (!content || typeof content !== 'string' || content.trim() === '') {
    return { error: 'Note content must be a non-empty string.' };
  }
  // Edge case: duplicate note content
  if (notes.some(n => n.content === content)) {
    return { error: 'Duplicate note content.' };
  }
  const note = new Note(notes.length + 1, content);
  notes.push(note);
  return note;
};

exports.getNotes = () => {
  // Edge case: no notes
  if (notes.length === 0) {
    return { message: 'No notes available.' };
  }
  return notes;
};

exports.deleteNoteById = (id) => {
  // Edge case: id is not a number or invalid
  if (!id || typeof id !== 'number' || id <= 0) {
    return { error: 'Invalid note id.' };
  }
  const index = notes.findIndex(n => n.id === id);
  if (index === -1) {
    return { error: 'Note not found.' };
  }
  const deleted = notes.splice(index, 1)[0];
  return { message: 'Note deleted.', note: deleted };
};
