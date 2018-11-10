// Import MySQL connection.
var connection = require("./connection.js");


// ORM
// =============================================================

var tableName = "goodBurgers";

var orm = {

  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  selectAll: function(callback) {
    var burger = "SELECT * FROM " + tableName;

    connection.query(burger, function(err, result) {

      callback(result);

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

insertOne: function(todo, callback) {
    var burger = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,?)";
    todo.devoured = todo.devoured || false;
    connection.query(burger, [
      todo.burger_name, todo.devoured
    ], function(err, result) {

      callback(result);

    });
  },

  updateOne: function(todo, callback) {
    var burger = "UPDATE " + tableName + " SET burger_name=? WHERE id=?";

    connection.query(burger, [
      todo.burger_name, todo.id
    ], function(err, result) {

      callback(result);

    });
  }

};

// Export the orm object for the model (burger.js).
module.exports = orm;