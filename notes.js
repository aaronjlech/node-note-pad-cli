
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
   duplicate = notes.filter(note => note.title === title);
   if(duplicate.length === 0){
      let note = {
         title,
         body
      };
      notes.push(note)
      saveNotes(notes);
      console.log('Note added')
   } else {
      console.log(`title: ${title} --- already taken`);
   }

};

const getAll = () => {
   console.log('getting all notes');
   fetchNotes().map(note => {
      console.log(`TITLE: ${note.title}`, '----', `BODY: ${note.body}`);
   })
};

const removeNote = (title) => {
   let notes = fetchNotes();
   filtered = notes.filter(note => note.title !== title);
   saveNotes(filtered);
   return notes.length !== filtered.length;
};
const readNote = (title) => {
   let notes = fetchNotes();
   let filtered = notes.filter(note => note.title === title);
   console.log(`TITLE: ${note.title}`, '----', `BODY: ${note.body}`);

}

module.exports = {
   addNote,
   getAll,
   removeNote,
   readNote

}
