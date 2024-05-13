const router = require("express").Router();
const { Comment } = require("../../models");
router.post("/", async (req, res) => {
  try {
    const { comment, postId } = req.body;

    const user = req.session.user_id;
    const date = new Date();

    const newComment = await Comment.create({
      content: comment,
      post_date: date,
      user_id: user,
      blogpost_id: postId,
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
