const express = require('express');
const router = express.Router();

router.use('/pets', require('./pets'));
router.use('/applications', require('./applications'));
router.use('/auth', require('./auth'));

router.get('/', (req, res) => { res.send(req.session.user !== undefined ? `Logged in as ${req.session.user.username}` : "Logged Out")});

module.exports = router;
