const notes = [];

function saveNote(content, id) {
  notes.push({ content, id });
  return notes; // write some code here
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]
