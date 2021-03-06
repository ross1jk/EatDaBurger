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
                // console.log(result);
            }
        );
    },
    // insertOne()
    // updateOne()
}

module.exports = orm;