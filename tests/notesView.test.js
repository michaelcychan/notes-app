/**
 * @jest-environment jsdom
 */

const NotesModel = require('../notesModel');
const NotesView = require('../notesView');
const fs = require('fs');

describe('NotesView', () => {
  it('displays the notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('This is the first Note');
    
    view.displayNotes();
    expect(document.body.querySelectorAll('div.note').length).toStrictEqual(1);
  })
})