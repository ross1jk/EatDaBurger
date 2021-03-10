const orm = require('../config/orm.js');

const burger = {
    // Gets All Burgers
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },

    // Inserts a New Burger
    insertOne(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, (res) => cb(res));
    },

    // Updates an Existing Burgers State
    updateOne(objColVals, condtion, cb) {
        console.log("inside updateone burger.js")
        orm.updateOne('burgers', objColVals, condtion, (res) => cb(res));
    }
};

module.exports = burger;
