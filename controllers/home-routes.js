const router = require("express").Router();
const sequelize = require("../config/connection");
const { Blog, User, Comment, Stream } = require("../models");
const fetch = require("node-fetch");

router.get("/", (req, res) => {
  console.log(req.session);

  Blog.findAll({
    attributes: ["id", "title", "created_at", "blog_content"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "blog_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbBlogData) => {
      const blogs = dbBlogData.map((blog) => blog.get({ plain: true }));

      res.render("homepage", {
        blogs,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

router.get("/blog/:id", (req, res) => {
  Blog.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "created_at", "blog_content"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "blog_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbBlogData) => {
      if (!dbBlogData) {
        res.status(404).json({ message: "No blog found with this id" });
        return;
      }

      // serialize the data
      const blog = dbBlogData.get({ plain: true });

      // pass data to template
      res.render("single-blog", {
        blog,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/streams", async (request, response) => {
  const url = fetch(process.env.STREAMS_URL, {
    method: "GET",
    headers: {
      "Client-ID": process.env.CLIENT_ID,
      Authorization: "Bearer " + process.env.access_token,
    },
  });
  const fetch_response = await url;
  const json = await fetch_response.json();
  response.json(json);
});

module.exports = router;
