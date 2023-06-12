var fs = require('fs');

//craete a file anmed mynewfile1.txt;
fs.appendFile('mynewfile1.txt', 'Hello dari Nisa', function(err){
    if(err) throw err;
    console.log('Saved!');
})