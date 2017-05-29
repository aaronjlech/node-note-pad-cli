console.log('app startinn');
const fs = require('fs');
const os = require('os');
const yargs = require('yargs');


const notes = require('./notes');



const argv = yargs.argv;
var command = process.argv[2];


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
         notes.removeNote();
         break;
   default:
      console.log('Command not recognized');
      break;
}
