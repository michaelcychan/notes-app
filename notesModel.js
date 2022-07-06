class NotesModel {
  constructor() {
    this.list = [];
  }
  getNotes(){
    return this.list
  }
  addNote(note) {
    this.list.push(note);
  }
  setNotes(notes) {
    notes.forEach((note) => {
      this.addNote(note);
    })
  }

  reset(){
    this.list = [];
  }
}

module.exports = NotesModel;
