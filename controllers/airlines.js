const knex = require("../db/knex.js");
const encryption = require('../config/encryption.js');

module.exports = {
  index: function (req, res) {
    if (req.session.airlineMessage) {
      res.render('airline_login', {message: req.session.airlineMessage});
    } else {
      res.render('airline_login', {message: "Please login."});
    }

  },

  login: function (req, res) {
    knex('airlines')
      .where('airlines.name', req.body.name)
      .then((airline) => {
        if (airline[0]) {
          if (airline[0].password === req.body.password) {
            console.log(airline[0].name)
            req.session.airline = airline[0].name;
            res.redirect(`/airlines/${airline[0].id}/flights`)
          } else {
            req.session.airlineMessage = "Invalid user or password. Please try again."
            res.redirect('/airlines');
          }
        } else {
          req.session.airlineMessage = "Invalid user or password. Please try again."
          res.redirect('/airlines');
        }
      })
  }
}
