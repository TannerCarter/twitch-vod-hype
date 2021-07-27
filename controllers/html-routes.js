//html-routes.js
var path = require("path");
//Middleware
var isAuthenticated = require("../config/middleware/isAuthenticated");
// Routes
module.exports = function (app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.
  // index route loads home.html
  app.get("/", function (req, res) {
    if (req.user) {
      res.redirect("/home");
    } else {
      res.render("signup", { js: ["signup.js"] });
    }
  });
  app.get("/login", function (req, res) {
    if (req.user) {
      res.redirect("/home");
    } else {
      res.render("login", { js: ["login.js"] });
    }
  });
  //Authenticate user
  app.get("/home", isAuthenticated, function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/views/home.html"));
    res.render("home", { js: ["home.js"] });
  });
};