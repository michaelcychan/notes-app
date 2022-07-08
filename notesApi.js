class NotesApi {
  loadNotes(callbackFunction) {
     fetch('http://localhost:3000/notes') // this line produces a promise
      .then((response) => response.json()) // response is a response object, json() is to retrieve the upstream data
      .then((data) => { // here data is a JSON object
        callbackFunction(data)
      })
  }
  createNote(newNote) {
    const contentObj = {"content": newNote}
    fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contentObj),
    })
  }
}

module.exports = NotesApi;
