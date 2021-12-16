const Flight = require('../models/flight');

module.exports = {
  create
};

function create(req, res) {
  // First find the flight we are adding a ticket to
  Flight.findById(req.params.id, function(err, flight) {
    // add the ticket to the flight.tickets array
    flight.tickets.push(req.body);
    // we need to save the parent document
    flight.save(function(err) {
      // handle errors first
      if (err) console.log(err);
      // console.log the flight to check that a ticket was created
      console.log(flight); //error
      // then, respond with a redirect
      res.redirect(`/flights/${flight._id}`);
    });
  });
}