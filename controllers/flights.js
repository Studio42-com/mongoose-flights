const Flight = require("../models/flight");
const Destination = require("../models/destination");


module.exports = {
index,
new: newFlight,
create,
show
};

function index(req, res) {
   Flight.find({}, function (err, flights) {
    //function(flights) {
      res.render("flights/index", { title: "All Flights", flights });
    });
  };

  function newFlight(req, res) {
    res.render("flights/new", { title: "Add Flight" });
  }

  function create(req, res) {
    //     for (let key in req.body) {
    //   if (req.body[key] === "") delete req.body[key];
    // }
    const flight = new Flight(req.body);
    flight.save(function (err) {
      // one way to handle errors
      if (err) {
        console.log(err);
        return res.redirect("/flights/new");
      }
      console.log(flight);
      res.redirect(`/flights/${flight._id}`); //${flight._id}
    });
  }

  function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
      //Flight.findById(req.params.id).populate('destination').exec(function (err, flight) {
      Destination.find({_id: {$nin: flight.city}}, function(err, destinations) {
        res.render("flights/show", { title: "Flight Detail", flight, destinations });
      });
    });
  }
