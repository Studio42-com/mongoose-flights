const Destination = require('../models/destination');
const Flight = require('../models/flight');

module.exports = {
  new: newDestination,
  create,
  addDestination
};

function addDestination(req, res) {
  // first find the flight we are trying to add a destination to
  Flight.findById(req.params.flightId, function(err, flight) {
    // then, add the flight ID to the Destinations array
    flight.destination.push(req.body.flightId);
    // lastly, save the parent document
    flight.save(function(err) {
      if (err) console.log(err);
      res.redirect(`/flights/${flight._id}`);
    })
  });
}

function create(req, res) {
  // Need to "fix" date formatting to prevent day off by 1
  // This is due to the <input type="date"> returning the date
  // string in this format:  "YYYY-MM-DD"
  // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
  // const s = req.body.born;
  // req.body.born = `${s.substr(5, 2)}-${s.substr(8, 2)}-${s.substr(0, 4)}`;
  
  //const flight = new Flight(req.body);
  flight.save(function (err) {
    // one way to handle errors
    if (err) {
      console.log(err);
      return res.redirect("/flights/new");
    }
    console.log(flight);
    res.redirect(`/flights/${flight._id}`);
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