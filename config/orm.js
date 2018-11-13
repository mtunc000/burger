// Import MySQL connection.
var connection = require("./connection.js");


// ORM
// =============================================================

var tableName = "goodBurgers";

var orm = {

  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  selectAll: function(tableName,cb) {
    var burger = "SELECT * FROM " + tableName;

    connection.query(burger, function(err, result) {

      if (err) {
        throw err;
      }
      cb(result);

    });
  },

  // Here our ORM is creating a simple method for performing a query of a single character in the table.
  // Again, we make use of the callback to grab a specific character from the database.

//   deleteTodo: function(id, callback) {

//     var s = "DELETE FROM " + tableName + " WHERE id=?";

//     connection.query(s, [id], function(err, result) {

//       callback(result);
//     });

//   },

insertOne: function(tableName, cols,val,cb) {
  console.log(val)
    var burger = `INSERT INTO ${tableName} (burger_name, devoured) VALUES ('${val[0]}',${val[1]})`;
    console.log(burger)
    tableName.burger_name =cols.burger_name
    tableName.devoured = val.devoured || false;
    connection.query(burger, [
      tableName.burger_name, tableName.devoured
    ], function(err, result) {

      if (err) {
        throw err;
      }

      cb(result);

    });
  },

  updateOne: function(tableName, cb) {
    var burger = "UPDATE " + tableName + " SET burger_name=? WHERE id=?";

    connection.query(burger, [
      tableName.burger_name, tableName.id
    ], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);

    });
  }

};

// Export the orm object for the model (burger.js).
module.exports = orm;