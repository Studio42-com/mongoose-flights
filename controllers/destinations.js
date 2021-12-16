const Destination = require('../models/destination');
const Flight = require('../models/flight');

module.exports = {
  new: newDestination,
  create,
  addDestination
};

function addDestination(req, res) {
  // first find the flight we are trying to add a city to
  Flight.findById(req.params.flightId, function(err, flight) {
    // then, add the flight ID to the city array

    flight.city.push(req.body.destinationId); //changed from flightId to destinationId
    // lastly, save the parent document
    flight.save(function(err) {
      if (err) console.log(err);       
      res.redirect(`/flights/${flight._id}`);
    })
  });
}

function create(req, res) {
    //  console.log(destination);
    Destination.create(req.body, function (err, destination) {
      res.redirect('/destinations/new');
    });
}

  // Destination.create(req.body, function (err, destination) {
  //   res.redirect('/destinations/new');
//   });
// }

function newDestination(req, res) {
  Destination.find({}, function (err, destinations) {
    res.render('destinations/new', {
      title: 'Add Destination',
      destinations
    });
  })
}