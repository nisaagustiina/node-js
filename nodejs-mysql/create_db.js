var db = require('./db_config');

const sql = 'CREATE DATABASE node';
db.query(sql, function(err, res){
    if(err) throw err;
    console.log('Database created');
})