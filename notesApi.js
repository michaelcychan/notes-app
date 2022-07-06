class NotesApi {
  loadNotes(callbackFunction) {
     fetch('http://localhost:3000/notes')
      .then((response) => response.json())
      .then((data) => {
        callbackFunction(data)
      })
  }
}

module.exports = NotesApi;
