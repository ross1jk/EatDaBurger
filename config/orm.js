const { query } = require('./connection.js');
const connection = require('./connection.js');

// Helper function for SQL syntax to add question marks (?, ?, ?) in query
const printQuestionMarks = (num) => {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
};

// Helper function to convert object key/value pairs to SQL syntax
const objToSql = (ob) => {
    const arr = [];
    for (const key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = `'${value}'`;
            }
            arr.push(`${key}=${value}`);
        }
    }

    return arr.toString();
};

const orm = {
    // Gets All Burgers
    selectAll(tableInput, cb) {
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

    // Inserts a New Burger
    insertOne(table, cols, vals, cb) {
        let queryString = `INSERT INTO ${table}`;

        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += printQuestionMarks(vals.length);
        queryString += ') ';

        connection.query(queryString, vals, (err, result) => {
            if (err) { throw err; }
            cb(result);
        });
    },

    // Updates an Existing Burgers State
    updateOne(table, objColVals, condition, cb) {
        let queryString = `UPDATE ${table}`;

        queryString += ' SET ';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;

        connection.query(queryString, (err, result) => {
            if (err) { throw err; }
            cb(result);
        });
    }
}

module.exports = orm;
