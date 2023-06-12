var fs = require('fs');

fs.open('mynewfile3.txt', 'w+', function(err, file){
    if(err) throw err;

    //kontent yang akan ditulis
    let content = 'Hello Nisa!';

    //tulis dalam file
    fs.writeFile(file, content, (err)=>{
        if(err) throw err;
        console.log('Saved!');
    })

    //baca file
    fs.readFile(file, (err, data) => {
        if(err) throw err;
        console.log(data.toString('utf8'));
    })
})