const { Comment } = require("../models");

const commentdata = [
  {
    content: "This is a very informative post! Keep it up!",
    post_date: "05/11/24",
    user_id: 2,
    blogpost_id: 1,
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
