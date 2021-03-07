const { query } = require('./connection.js');
const connection = require('./connection.js');

const orm = {
    selectAll(tableInput,cb) {
        const queryString = 'SELECT * FROM ??';
        connection.query(
            queryString,
            [tableInput],
            (err, result) => {
               if (err) throw err;
               cb(result);
            }
        );
    },
    
    insertOne(tableInput, param, cb){
        console.log("orm.js")
        const queryString = 'INSERT INTO ?? VALUES ??'
        connection.query(
            queryString,
            [req.body.burgers], 
            (err, result) => {
                if (err) throw err; 
                cb(result); 
            }
        )
    }
    // updateOne()
}

module.exports = orm;