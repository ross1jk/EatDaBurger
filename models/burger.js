const orm = require('../config/orm.js');

const burger = {
    //   update(objColVals, condition, cb) {
    //     orm.update('cats', objColVals, condition, (res) => cb(res));
    //   }

    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },

    insertOne(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, (res) => cb(res));
    }
    // updateOne()
};

module.exports = burger;
