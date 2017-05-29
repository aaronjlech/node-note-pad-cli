console.log('app startinn');
const fs = require('fs');
const os = require('os');
const yargs = require('yargs');


const notes = require('./notes');



const argv = yargs.argv;
var command = argv._[0];


console.log('Command', command);
console.log('Process', process.argv);
console.log("yargs", argv);




switch (command) {
   case 'add':
      notes.addNote(argv.title, argv.body);
      break;
   case "list":
      notes.getAll();
      break;
   case "read":
      notes.readNote();
      break;
      case "remove":
         let noteRemoved = notes.removeNote(argv.title);
         message = noteRemoved ? `${argv.title} removed` : `${argv.title} note not found`;
         console.log(message);
         break;
   default:
      console.log('Command not recognized');
      break;
}
