const connection = require('./connection.js');

const orm = {
    selectAll(tableInput) {
        const queryString = 'SELECT * FROM ??';
        connection.query(
            queryString,
            [tableInput],
            (err, result) => {
                if (err) throw err;
                console.log(result);
            }
        );
    },
    // insertOne()
    // updateOne()
}

module.exports = orm;