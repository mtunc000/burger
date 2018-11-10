var express = require('express');



var PORT = process.env.PORT || 9200;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
//app.use(express.static("public"));

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


app.use(express.static('./public/'))


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
