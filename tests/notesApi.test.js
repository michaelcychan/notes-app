const NotesApi = require('../notesApi');
require ('jest-fetch-mock').enableFetchMocks();

describe('NotesApi', () => {
  it('calls fetch and loads data', () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify(['This note is coming from the server']));
    api.loadNotes((returnedDataFromApi) =>{
      expect(returnedDataFromApi).toStrictEqual(['This note is coming from the server'])
    });
  });
  it('posts data to server', () => {
    const api = new NotesApi();
    api.createNote('This is a new 🪪 note')
    const contentObj = {"content": 'This is a new 🪪 note'}
    expect(fetch).toHaveBeenCalledWith('http://localhost:3000/notes',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contentObj),
    })
  })
})