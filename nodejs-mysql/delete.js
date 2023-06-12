const db = require('./db_config');

const sql = `DELETE FROM customers WHERE id=1`;

db.query(sql, function(err, res){
    if(err) throw err;
    console.log('1 record inserted');
})