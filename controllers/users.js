const knex = require("../db/knex.js");
const encryption = require('../config/encryption.js');

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    if (req.session.message) {
      res.render("user_login", {message: req.session.message});
    } else {
      res.render("user_login", {message: ''});
    }
  },

  login: function(req, res) {
    knex('users')
      .where('email', req.body.email)
      .then((encryptedUser) => {
        if (encryptedUser[0]) {
          console.log(encryptedUser);
          encryption.check(req.body, encryptedUser[0])
            .then((isValid) => {
              console.log(isValid);
              if (isValid) {
                req.session.user = encryptedUser[0].name;
                res.redirect(`/users/${encryptedUser[0].id}/flights`);
              } else {
                req.session.message = "Invalid username or password. Please try again.";
                res.redirect('/users');
              }
            })
        } else {
          req.session.message = "Invalid username or password. Please try again.";
          res.redirect('/users');
        }
      })
      .catch((err) => {
        console.log(err);
      })
  },

  register: function (req, res) {

    let newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }

    encryption.hash(newUser)
      .then((newEncryptedUser) => {
        knex('users')
          .insert(newEncryptedUser, '*')
          .then((newUser) => {
            console.log(newUser);
            req.session.user = newUser[0].name;
            console.log("req.session.user", req.session.user)
            res.redirect(`/users/${newUser[0].id}/flights`)
          })
          .catch((err) => {
            console.log(err);
          })
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
