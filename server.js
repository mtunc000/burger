var express = require('express');
var path = require('path')
var PORT = process.env.PORT || 5000;
var app = express();

console.log(path.join(__dirname, 'public'))

app.use(express.static("public"));
console.log("serving static")
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controllers.js");
app.use(routes);

// If no matching route is found default to home
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "home.html"));
// });

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "./views/index.handlebars"))
})

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
