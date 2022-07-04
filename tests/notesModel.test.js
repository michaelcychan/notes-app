const NotesModel = require('../notesModel');

describe('NotesModel', () => {
  it('initialises with an empty note', () => {
    const model = new NotesModel();
    expect(model.getNotes()).toStrictEqual([]);
  });
  it('adds notes to the stored note', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toStrictEqual(['Buy milk', 'Go to the gym']);
  });
  it('clears the list if reset', () => {
    const model = new NotesModel();
    expect(model.getNotes()).toStrictEqual([]);
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    model.reset();
    expect(model.getNotes()).toStrictEqual([]);
  });
})
