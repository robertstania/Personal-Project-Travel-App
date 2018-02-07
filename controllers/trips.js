const knex = require("../db/knex.js");
const encryption = require('../config/encryption.js');

module.exports = {

  getAll: function (req, res) {
    knex('users')
      .where('id', req.params.id)
      .then((user) => {
        let currentUser = user[0];
        knex('trips')
          .select('trips.title', 'trips.description', 'flights.start', 'flights.destination', 'airlines.name')
          .join('flights', 'trips.flight_id', 'flights.id')
          .join('airlines', 'airlines.id', 'flights.airline_id')
          .where('user_id', currentUser.id)
          .orderBy('trips.id', 'desc')
          .then((tripsList) => {
            knex('flights')
              .select('flights.id', 'flights.start', 'flights.destination', 'airlines.name')
              .join('airlines', 'airlines.id', 'flights.airline_id')
              .then((flightsList) => {
                if (tripsList[0]) {
                  var outputMessage = 'Scheduled Flights:';

                } else {
                  var outputMessage = 'You do not have any schedule flights.';
                }
                console.log("tripsList", tripsList);
                console.log("flightsList", flightsList);
                res.render('trips', {user: currentUser, trips: tripsList, message: outputMessage, flights: flightsList});
              })
          })
          .catch((err) => {
            console.log(err);
          })
      })
      .catch((err) => {
        console.log(err);
      })
  },

  create: function (req, res) {
    let newTrip = {
      user_id: req.params.id,
      title: req.body.title,
      description: req.body.description,
      flight_id: req.body.flight_id
    }
    knex('trips')
      .insert(newTrip, '*')
      .then((addedTrip) => {
        res.redirect(`/users/${req.params.id}/flights`);
      })
      .catch((err) => {
        console.log(err);
      })

    console.log("req.body", req.body);
  }
}
