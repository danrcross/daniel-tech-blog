const { User } = require("../models");

const userdata = [
  {
    username: "inituser0123",
    email: "coolemail@emailz.com",
    password: "Securepassword111",
  },
  {
    username: "cooluser456",
    email: "greatemail@gmail.com",
    password: "Securepassword111",
  },
];

const seedUsers = () =>
  User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUsers;
