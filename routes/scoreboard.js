const express = require('express');
const fs = require('fs');
const router = express.Router();

// get login page
router.get('/', (req, res) => {
  res.render('scoreboard', { title: 'Scoreboard' });
});

module.exports = router;