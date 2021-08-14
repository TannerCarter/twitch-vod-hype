const router = require("express").Router();
const sequelize = require("../config/connection");
const { Blog, User, Comment } = require("../models");
const fetch = require("node-fetch");

router.get("/", async (req, res) => {
  let streams;
  try {
    const url = fetch(process.env.STREAMS_URL, {
      method: "GET",
      headers: {
        "Client-ID": process.env.CLIENT_ID,
        Authorization: "Bearer " + process.env.access_token,
      },
    });
    console.log(res);
    const fetch_response = await url;
    const json = await fetch_response.json();
    streams = json.data;
  } catch (error) {
    console.log(error);
  }

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
        streams: streams.map((stream) => {
          return {
            ...stream,
            thumbnail_url: stream.thumbnail_url.replace(
              "{width}x{height}",
              "200x100"
            ),
          };
        }),

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
  try {
    const url = fetch(process.env.STREAMS_URL, {
      method: "GET",
      headers: {
        "Client-ID": process.env.CLIENT_ID,
        Authorization: "Bearer " + process.env.access_token,
      },
    });
    console.log(response);
    const fetch_response = await url;
    const json = await fetch_response.json();
    response.json(json);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
