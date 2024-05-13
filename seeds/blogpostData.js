const { BlogPost } = require("../models");

const blogpostdata = [
  {
    title: "Why Computers Work",
    content: "Electricity and metal make computers work. It is simple, really!",
    post_date: "5/11/24",
    user_id: 1,
  },
];

const seedBlogposts = () => BlogPost.bulkCreate(blogpostdata);

module.exports = seedBlogposts;
