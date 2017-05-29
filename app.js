console.log('app startinn');


const fs = require('fs');
const os = require('os');
const notes = require('./notes');

var user = os.userInfo();
fs.appendFile('greetings.txt', `Hello ${user.username}!`, function(err){
   if(err) {
      console.log('unable to write to console!')
   }
})
