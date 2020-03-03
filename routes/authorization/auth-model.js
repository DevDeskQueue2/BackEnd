const db = require("../../data/db");

module.exports = {
  findBy,
  add
}

// returns list of all users
// function find() {
//   return db("users").select("id", "username");
// }

// select user by filter
function findBy(username) {
  return db("users").where({ username }).first();
}

// adds new user
function add(user) {
  return db('users')
    .insert(user);
}