
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
    orm.selectAll("goodBurgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("goodBurgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("goodBurgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
//   delete: function(condition, cb) {
//     orm.delete("cats", condition, function(res) {
//       cb(res);
//     });
//   }
};

// Export the database functions for the controller (burgers_Controller.js).
module.exports = burger;
