var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controller.js");

app.use(routes);

app.listen(PORT, function () {
  console.log("Server listening on: http://localhost: " + PORT);
  // log server activity in external file
});
