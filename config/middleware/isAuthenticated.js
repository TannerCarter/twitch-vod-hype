// This is middleware to restrict user's not logged in
module.exports = function (req, res, next) {
  if (req.user) {
    return next();
  }

  // Redirect to login if not logged in.
  return res.redirect("/");
};
