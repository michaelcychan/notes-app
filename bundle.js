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

  // index.js
  var NotesModel = require_notesModel();
  var model = new NotesModel();
  console.log("The notes app is running");
  console.log("The list has been initialised. The current notes:");
  console.log(model.getNotes());
})();
