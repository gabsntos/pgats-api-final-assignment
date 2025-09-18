const authService = require('../services/authService');
const taskService = require('../services/taskService');
const noteService = require('../services/noteService');

module.exports = {
  Query: {
    tasks: (parent, args, context) => {
      if (!context.user) throw new Error('Unauthorized');
      return taskService.getTasks();
    },
    notes: (parent, args, context) => {
      if (!context.user) throw new Error('Unauthorized');
      const result = noteService.getNotes();
      if (Array.isArray(result)) return result;
      return [];
    }
  },
  Mutation: {
    login: (parent, { username, password }) => {
      const token = authService.authenticate(username, password);
      if (token) return { token };
      return { error: 'Invalid credentials' };
    },
    createNote: (parent, { content }, context) => {
      if (!context.user) throw new Error('Unauthorized');
      const result = noteService.addNote(content);
      if (result.error) throw new Error(result.error);
      return result;
    },
    deleteNote: (parent, { id }, context) => {
      if (!context.user) throw new Error('Unauthorized');
      const result = noteService.deleteNoteById(id);
      if (result.error) return { error: result.error };
      return { message: result.message, note: result.note };
    }
  }
};
