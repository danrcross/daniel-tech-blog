const router = require("express").Router();
const { BlogPost } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;
    const user = req.session.user_id;
    const date = new Date();
    const newPost = await BlogPost.create({
      title: title,
      content: content,
      user_id: user,
      post_date: date,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const blogpostData = await BlogPost.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!blogpostData) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }
    res.status(200).json(blogpostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const date = new Date();
    const blogpostData = await BlogPost.update(
      {
        title: req.body.title,
        content: req.body.content,
        post_date: date,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json(blogpostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
