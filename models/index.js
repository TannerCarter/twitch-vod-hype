//Code missing models!!
const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");
const Stream = require("./Stream");
//route
User.hasMany(Blog, {
  foreignKey: "user_id",
});
User.hasMany(Stream, {
  foreignKey: "user_id",
});

Blog.belongsTo(User, {
  foreignKey: "user_id",
});
Blog.belongsTo(Stream, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Blog.hasMany(Comment, {
  foreignKey: "blog_id",
});

module.exports = { User, Blog, Comment, Stream };
