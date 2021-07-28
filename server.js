var express = require("express");
var path = require("path");
var session = require("express-session");
var passport = require("./config/passport");
var compression = require("compression");

// Express

var app = express();
var PORT = process.env.PORT || 3001;

// compression
app.use(compression());

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars.
var exphbs = require("express-handlebars");

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");

//public
app.use(express.static("public"));

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
//Tima to add in routing once routes configured below this.

require("./controller/html-routes.js")(app);
require("./controller/user-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("Listening on port %s.", PORT, PORT);
  });
});
