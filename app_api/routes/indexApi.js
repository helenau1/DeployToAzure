const express = require('express');
const router = express.Router();

const ctrlApiTrails = require('../controllers/ctrlApiTrails');
const ctrlApiSpecies = require('../controllers/ctrlApiSpecies');

router
    .route('/trails')
    .get(ctrlApiTrails.trailsList)
    .post(ctrlApiTrails.addTrails);


router
    .route('/species')
    .get(ctrlApiSpecies.speciesList)
    .post(ctrlApiSpecies.addSpecies);


module.exports = router;