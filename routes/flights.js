const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

// All paths in this router have "/flights" prefixed to them

// GET "/flights" - Index Route
router.get('/', flightsCtrl.index);

//GET "flights/New" New Route
router.get('/new', flightsCtrl.new);

// POST "/flights" - Create Route
router.post('/', flightsCtrl.create);

// GET "/flights/:id" - Show Route
router.get('/:id', flightsCtrl.show);

module.exports = router;
