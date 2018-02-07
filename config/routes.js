//Update the name of the controller below and rename the file.
const users = require("../controllers/users.js");
const trips = require("../controllers/trips.js");
const airlines = require("../controllers/airlines.js");
const flights = require("../controllers/flights.js");

module.exports = function(app){

  app.get('/users', users.index);

  app.post('/users/login', users.login);

  app.post('/users/register', users.register);

  app.get('/airlines', airlines.index);

  app.post('/airlines/login', airlines.login);

  app.use(loggedUser);

  app.get('/users/:id/flights', trips.getAll); //change to trips

  app.post('/users/:id/flights', trips.create); //change to trips

  app.use(loggedAirline);

  app.get('/airlines/:id/flights', flights.getAll);

  app.post('/airlines/:id/flights', flights.create);


  function loggedUser(req, res, next) {
    if (req.session.user || req.session.airline) {
      console.log("move along");
      next();
    } else {
      console.log("redirected from users");
      res.redirect('/users');
    }
  }

  function loggedAirline(req, res, next) {
    if (req.session.airline) {
      console.log("move along");
      next();
    } else {
      console.log("redirected");
      res.redirect('/airlines');
    }
  }

}
