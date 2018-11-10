var express = require("express");
var router = express.Router();


var  burger= require("../models/burger.js");



// Routes
// =============================================================
// module.exports = function(app) {

//     // GET route for getting all of the todos
//     app.get("/api/goodBurgers", function(req, res) {
//       orm.selectAll(function(results) {
//         res.json(results);
//       });
//     });
// // Create all our routes and set up logic within those routes where required.

    router.get("/", function(req, res) {
        burger.selectAll(function(data) {
          var burgerObject = {
            goodBurgers: data
          };
          console.log(burgerObject);
          res.render("index", burgerObject);
        });
      });


  
    // POST route for saving a new todo. We can create a todo using the data on req.body
    // app.post("/api/goodBurgers", function(req, res) {
    //   orm.insertOne(req.body, function(results) {
    //     res.json(results);
    //   });
    // });

    router.post("/api/goodBurgers", function(req, res) {
        burger.insertOne([
          "burger_name", "devoured"
        ], [
          req.body.burger_name, req.body.devoured
        ], function(result) {
          // Send back the ID of the new quote
          res.json({ id: result.insertId });
        });
      });
  
    // // DELETE route for deleting todos. We can access the ID of the todo to delete in
    // // req.params.id
    // app.delete("/api/todos/:id", function(req, res) {
    //   orm.deleteTodo(req.params.id, function(results) {
    //     res.json(results);
    //   });
    // });
  
    // PUT route for updating todos. We can access the updated todo in req.body
//     app.put("/api/goodBurgers", function(req, res) {
//       orm.updateOne(req.body, function(results) {
//         res.json(results);
//       });
//     });
//   };

  router.put("/api/goodBurgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == false) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  



//   module.exports = burger;

  module.exports = router;
  /////////////////////
  

// // Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//   cat.all(function(data) {
//     var hbsObject = {
//       cats: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

// router.post("/api/cats", function(req, res) {
//   cat.create([
//     "name", "sleepy"
//   ], [
//     req.body.name, req.body.sleepy
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update({
//     sleepy: req.body.sleepy
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   cat.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// // Export routes for server.js to use.
// module.exports = router;