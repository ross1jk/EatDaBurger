const orm = require('../config/orm.js');

const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },

    insertOne(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, (res) => cb(res));
    },
    updateOne(objColVals, condtion, cb) {
        console.log("inside updateone burger.js")
        orm.updateOne('burgers', objColVals, condtion, (res) => cb(res));
    }
};

module.exports = burger;
