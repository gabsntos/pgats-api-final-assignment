// This is a simple Note model for demonstration
class Note {
  constructor(id, content) {
    this.id = id;
    this.content = content;
  }
}

const notes = [
  new Note(1, 'this note already exist')
];

module.exports = { Note, notes };
