const NotesApi = require('../notesApi');
require ('jest-fetch-mock').enableFetchMocks();

describe('NotesApi', () => {
  it('calls fetch and loads data', () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify(['This note is coming from the server']));
    api.loadNotes((returnedDataFromApi) =>{
      expect(returnedDataFromApi).toStrictEqual(['This note is coming from the server'])
    });
  })
})