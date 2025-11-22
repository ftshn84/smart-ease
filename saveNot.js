const notes = [];

function saveNote(content, id) {
  notes.push({ content, id });
  return notes;
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]
function getNote(id) {
  return notes.find((note) => note.id === id);
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}
function logOutNotesFormatted() {
  notes.forEach((note) => {
    console.log(
      "The note with id: " +
        note.id +
        ", has the following note text:" +
        note.content
    ); // your code here
  });
}

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry
