const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

// Routes are not prefixed with any path

// GET "/destinations/new" - New Route
router.get('/destinations/new', destinationsCtrl.new);

// POST "/destinations" - Create Route
router.post('/destinations', destinationsCtrl.create);

// POST "/destination/:flightId/destination" - Add to Cast Route
router.post('/flights/:flightId/destinations', destinationsCtrl.addDestination);

module.exports = router;