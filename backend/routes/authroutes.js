const express = require('express');
const router = express.Router();

const authcontroller = require('../controller/authcontroller');

router.get('/test', (req, res) => {
    res.send("Route working");
});

router.post('/signup', authcontroller.signup);
router.post('/login', authcontroller.logins);

module.exports = router;