const NotesModel = require('./notesModel');
const model = new NotesModel();

console.log('The notes app is running');

console.log('The list has been initialised. The current notes:');
console.log(model.getNotes());
