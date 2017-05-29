
const fs = require('fs');

const fetchNotes = () => {
   let notes = [];
   try {
      var notesStr = fs.readFileSync('notes-data.json');
      notes = JSON.parse(notesStr);

   } catch (e) {

   };
   return notes
}
const saveNotes = (notes) => {
   fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

const addNote = (title, body) => {
   let notes = fetchNotes();
   let note = {
      title,
      body
   };
   notes.push(note)
   saveNotes(notes);
};

const getAll = () => {
   console.log('getting all notes');
};

const removeNote = (title) => {
   let notes = fetchNotes();
   filtered = notes.filter(note => note.title !== title);
   saveNotes(filtered);
   return notes.length !== filtered.length;
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
