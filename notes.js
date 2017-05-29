
const fs = require('fs');

let notes = [];
try {
   var notesStr = fs.readFileSync('notes-data.json');
   notes = JSON.parse(notesStr);

} catch (e) {

};
const addNote = (title, body) => {
   let note = {
      title,
      body
   };
   notes.push(note)

   fs.writeFileSync('notes-data.json', JSON.stringify(notes))
};

const getAll = () => {
   console.log('getting all notes');
};

const removeNote = (title) => {
   console.log('removing note');
};
const readNote = (title) => {
   console.log('reading note');
}

module.exports = {
   addNote,
   getAll,
   removeNote,
   readNote

}
