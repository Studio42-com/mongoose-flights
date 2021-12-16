const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// Routes are not prefixed with any path

// POST "/flights/:id/tickets" - Create Review Route
router.post('/flights/:id/tickets', ticketsCtrl.create);




module.exports = router;