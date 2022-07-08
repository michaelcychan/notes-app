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
        setNotes(notes) {
          notes.forEach((note) => {
            this.addNote(note);
          });
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
        constructor(model2, api2) {
          this.mainContainerEl = document.querySelector("#main-container");
          this.model = model2;
          this.api = api2;
          this.buttonEl = document.querySelector("#add-note-btn");
          this.buttonEl.addEventListener("click", () => {
            this.addNewNote();
            this.displayNotesFromApi();
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
          if (inputEl.value != "") {
            this.api.createNote(inputEl.value);
          }
          inputEl.value = "";
        }
        displayNotesFromApi() {
          this.api.loadNotes((notes) => {
            this.model.reset();
            this.model.setNotes(notes);
            this.displayNotes();
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // notesApi.js
  var require_notesApi = __commonJS({
    "notesApi.js"(exports, module) {
      var NotesApi2 = class {
        loadNotes(callbackFunction) {
          fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => {
            callbackFunction(data);
          });
        }
        createNote(newNote) {
          const contentObj = { "content": newNote };
          fetch("http://localhost:3000/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(contentObj)
          });
        }
      };
      module.exports = NotesApi2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var NotesApi = require_notesApi();
  console.log("The notes app is running");
  var api = new NotesApi();
  var model = new NotesModel();
  var view = new NotesView(model, api);
  console.log(model.getNotes());
  view.addNewNote();
  view.displayNotesFromApi();
})();
