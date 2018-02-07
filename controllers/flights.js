const knex = require("../db/knex.js");

module.exports = {
  getAll: function (req, res) {
    knex('airlines')
      .where('airlines.id', req.params.id)
      .then((airline) => {
        knex('flights')
          .where('flights.airline_id', airline[0].id)
          .orderBy('flights.id', 'desc')
          .then((flightList) => {
            res.render('airline_flights', {airline: airline[0], flights: flightList})
          })
      })
      .catch((err) => {
        console.log(err);
      })
  },

  create: function (req, res) {
    console.log(req.body);
    let newFlight = {
      start: req.body.start,
      destination: req.body.destination,
      airline_id: req.params.id
    }

    knex('flights')
      .insert(newFlight, '*')
      .then((flight) => {
        res.redirect(`/airlines/${req.params.id}/flights`);
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
