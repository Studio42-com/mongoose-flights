const express = require('express');
const router = express.Router();

// GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get("/", function (req, res, next) {
//   res.redirect("/flights");
// });

router.get('/', function(req, res, next) {
  res.redirect('/flights')
});

module.exports = router;
