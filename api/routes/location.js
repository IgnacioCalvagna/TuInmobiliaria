const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

router.get('/:name', locationController.getByLocation)
//router.post('/location', locationController.newLocation)


 module.exports = router;