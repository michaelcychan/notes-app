/**
 * @jest-environment jsdom
 */

const NotesModel = require("../notesModel");
const NotesApi = require('../notesApi');
const NotesView = require("../notesView");
// require ('jest-fetch-mock').enableFetchMocks();
const fs = require("fs");
 
describe("NotesView", () => {
  it("displays one note", () => {
    document.body.innerHTML = fs.readFileSync(__dirname + '/../index.html');
    const model = new NotesModel();
    const api = new NotesApi();
    const view = new NotesView(model, api);
    model.addNote("This is the first Note");
 
    view.displayNotes();
    expect(document.body.querySelectorAll("div.note").length).toStrictEqual(1);
  });
 
  it("displays multiple notes", () => {
    document.body.innerHTML = fs.readFileSync(__dirname + "/../index.html");
    const model = new NotesModel();
    const api = new NotesApi();
    const view = new NotesView(model, api);
    model.addNote("This is the first Note");
    model.addNote("This is the second Note");
    model.addNote("This is the third Note");
    view.displayNotes();
    expect(document.body.querySelectorAll("div.note").length).toStrictEqual(3);
    expect(document.body.querySelectorAll("#Test").length).toStrictEqual(3);
  });
 
  it("clicks button and adds new notes title", () => {
    document.body.innerHTML = fs.readFileSync(__dirname + "/../index.html");
    const model = new NotesModel();
    const fakeApi = {
      loadNotes: (() => {
        model.reset();
        model.setNotes(["Hello World"]);
        view.displayNotes();
      }),
      createNote: () => { return {content: 'Hello World'}},
    }

    const view = new NotesView(model, fakeApi);

    const inputEl = document.querySelector("#new-note");
    inputEl.value = "Hello World";

    const buttonEl = document.querySelector("#add-note-btn");
    buttonEl.click()
      expect(document.body.querySelectorAll("div.note").length).toEqual(1);
      expect(document.body.querySelector("div.note").innerHTML).toEqual(
      "Hello World"
    )
  });

  it("clicks button and keeps the same number of note ", () => {
    document.body.innerHTML = fs.readFileSync(__dirname + "/../index.html");
    const model = new NotesModel();
    const api = new NotesApi();
    const view = new NotesView(model, api);

    model.addNote("Hello 👋 World");
    model.addNote("Go 🗺️ to the world!");
    
    view.displayNotes()
    view.displayNotes()

    expect(document.body.querySelectorAll("div.note").length).toStrictEqual(2);
  });
  describe('displayNotesFromApi', () => {
    it('calls notes on api and calls model class displayNotes function', () => {
      // setting up the environment
      document.body.innerHTML = fs.readFileSync(__dirname + "/../index.html");
      const model = new NotesModel();

      // mocking the required callback function,
      // because the api is fake, can't take any callback function
      const fakeApi = {
        loadNotes: () => {
          model.setNotes(["No idea 🤔 what to do", 'Completely confused 😕 on this task'])
          view.displayNotes();
        }
      }
      const view = new NotesView(model, fakeApi);

      // running the actual view.displayNotesFromApi()
      // add a console.log in displayNotesFromApi() can confirm it was really called
      view.displayNotesFromApi();
      expect(document.body.querySelectorAll("div.note").length).toStrictEqual(2);
    })
  })
});

