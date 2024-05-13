const router = require("express").Router();
const { User, BlogPost, Comment } = require("../models");

// const withAuth = require('../utils/auth');

// GET all blogposts for homepage
router.get("/", async (req, res) => {
  try {
    const blogpostData = await BlogPost.findAll({
      include: [
        {
          model: Comment,
          attributes: ["content", "post_date"],
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    const blogposts = blogpostData.map((blogpost) =>
      blogpost.get({ plain: true })
    );
    res.render("homepage", {
      blogposts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all user's blogposts for dashboard
router.get("/dashboard", async (req, res) => {
  try {
    let blogposts;
    if (req.session.user_id) {
      const blogpostData = await BlogPost.findAll({
        where: { user_id: req.session.user_id },
        include: [
          {
            model: Comment,
            attributes: ["content", "post_date"],
          },
          {
            model: User,
            attributes: ["username"],
          },
        ],
      });

      blogposts = blogpostData.map((blogpost) => blogpost.get({ plain: true }));
    } else {
      blogposts = null;
    }
    res.render("dashboard", {
      blogposts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/dashboard/newpost", async (req, res) => {
  try {
    let blogposts;
    if (req.session.user_id) {
      const blogpostData = await BlogPost.findAll({
        where: { user_id: req.session.user_id },
        include: [
          {
            model: Comment,
            attributes: ["content", "post_date"],
          },
          {
            model: User,
            attributes: ["username"],
          },
        ],
      });

      blogposts = blogpostData.map((blogpost) => blogpost.get({ plain: true }));
      console.log(blogposts);
    } else {
      blogposts = null;
    }
    res.render("dashboard", {
      blogposts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one blogpost
router.get("/blogpost/:id", async (req, res) => {
  try {
    const bpData = await BlogPost.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
        {
          model: Comment,
        },
      ],
    });
    const comData = await Comment.findAll({
      where: { blogpost_id: req.params.id },
      include: [
        {
          model: User,
        },
      ],
    });

    const blogpost = bpData.get({ plain: true });
    const comments = comData.map((comment) => comment.get({ plain: true }));
    console.log(blogpost);
    console.log(comments);
    res.render("blogpost", {
      ...blogpost,
      comments: comments,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
