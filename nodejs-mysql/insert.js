const db = require('./db_config');

const sql = `INSERT INTO customers(name, address) VALUES ('Starbucks', 'Lombok Epicentrum Mall')`;

db.query(sql, function(err, res){
    if(err) throw err;
    console.log('1 record inserted');
})