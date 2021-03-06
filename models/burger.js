const orm = require('../config/orm.js');

const burger = {
//   create(cols, vals, cb) {
//     orm.create('cats', cols, vals, (res) => cb(res));
//   },
//   update(objColVals, condition, cb) {
//     orm.update('cats', objColVals, condition, (res) => cb(res));
//   }

selectAll(cb){
    orm.selectAll('burgers', (res) => cb(res));
}
// insertOne()
// updateOne()
};

module.exports = burger;
