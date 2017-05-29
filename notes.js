const addNote = (title, body) => {
   console.log('addNote');
   return "New Note";
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
