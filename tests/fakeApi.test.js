const NotesApi = require('../notesApi');
require ('jest-fetch-mock').enableFetchMocks()


// The following test must fail because the NoteApi class does not have loadData()
// It is to show that even there is a fetch mock, the class itself is involved.
xdescribe('NotesApi', () => {
  it('calls fetch and loads data', () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
      name: "A Random Name",
      id: 1234,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis."
    }));
    api.loadData((returnedDataFromApi) => {
      expect(returnedDataFromApi.name).toBe("A Random Name");
      expect(returnedDataFromApi.id).toBe(1234);
      expect(returnedDataFromApi.description).toBe("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis.");
    });
  })
})

