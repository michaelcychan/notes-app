(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.list = [];
        }
        getNotes() {
          return this.list;
        }
        addNote(note) {
          this.list.push(note);
        }
        reset() {
          this.list = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2) {
          this.mainContainerEl = document.querySelector("#main-container");
          this.model = model2;
          this.buttonEl = document.querySelector("#add-note-btn");
          this.buttonEl.addEventListener("click", () => {
            this.addNewNote();
            this.displayNotes();
          });
        }
        displayNotes() {
          document.querySelectorAll(".note").forEach((eachNote) => eachNote.remove());
          this.model.getNotes().forEach((eachNote) => {
            let div = document.createElement("div");
            div.setAttribute("class", "note");
            div.append(eachNote);
            div.setAttribute("id", "Test");
            this.mainContainerEl.append(div);
          });
        }
        addNewNote() {
          const inputEl = document.querySelector("#new-note");
          console.log("Helloooo");
          console.log(inputEl.value);
          this.model.addNote(inputEl.value);
          inputEl.value = "";
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  console.log("The notes app is running");
  var model = new NotesModel();
  console.log(model.getNotes());
  var view = new NotesView(model);
  view.addNewNote();
  view.displayNotes();
})();
