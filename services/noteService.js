let notes = [];

exports.addNote = (content) => {
  const note = { id: notes.length + 1, content };
  notes.push(note);
  return note;
};

exports.getNotes = () => notes;
