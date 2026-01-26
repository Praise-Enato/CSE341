const express = require('express');
const router = express.Router();

router.use('/pets', require('./pets'));
router.use('/applications', require('./applications'));

module.exports = router;
