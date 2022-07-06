class NotesView {
  constructor(model) {
    this.mainContainerEl = document.querySelector("#main-container");
    this.model = model;
    this.buttonEl = document.querySelector("#add-note-btn");
    this.buttonEl.addEventListener("click", () => {
      this.addNewNote();
      this.displayNotes();
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
    this.model.addNote(inputEl.value);
    inputEl.value = ""
  }
}

module.exports = NotesView;
