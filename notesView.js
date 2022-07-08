class NotesView {
  constructor(model, api) {
    this.mainContainerEl = document.querySelector("#main-container");
    this.model = model;
    this.api = api;
    this.buttonEl = document.querySelector("#add-note-btn");
    this.buttonEl.addEventListener("click", () => {
      this.addNewNote();
      this.displayNotesFromApi();
    });
  }
  
  displayNotes() {
    document.querySelectorAll('.note').forEach((eachNote) => eachNote.remove());
    this.model.getNotes().forEach((eachNote) => {
      let div = document.createElement("div");
      div.setAttribute("class", "note"); // div.className = "note"
      div.append(eachNote); // div.innerText = eachNote
      div.setAttribute("id", "Test");
      this.mainContainerEl.append(div);
    });
  }

  addNewNote() {
    const inputEl = document.querySelector("#new-note");
    if (inputEl.value != "") {
      this.api.createNote(inputEl.value)
    }
    inputEl.value = ""
  }

  displayNotesFromApi() {
    this.api.loadNotes((notes) => { //using API call back function
      this.model.reset();
      this.model.setNotes(notes);
      this.displayNotes();
    },
    this.displayError())
  }
  displayError() {
    let divError = document.createElement('div');
    divError.setAttribute("class", "error");
    divError.innerText = 'Ooops, something went wrong!'
    this.mainContainerEl.append(divError);
  }
}

module.exports = NotesView;