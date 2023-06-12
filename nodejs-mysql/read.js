const db = require('./db_config');

const sql = `SELECT * FROM customers`;

db.query(sql, function(err, res){
    if(err) throw err;
    console.log(`ID \t NAME \t ADDRESS`);
    console.log('------------------------------------------------');
    res.forEach((cust) => {
        console.log(`${cust.id} \t ${cust.name} \t ${cust.address}`);
    });
})