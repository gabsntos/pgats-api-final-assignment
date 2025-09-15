// This is a simple Note model for demonstration
class Note {
  constructor(id, content) {
    this.id = id;
    this.content = content;
  }
}

const notes = [];

module.exports = { Note, notes };
