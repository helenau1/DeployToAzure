const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/ctrlMain'); //controller for the homepage
const ctrlFirst = require('../controllers/ctrlFirst'); //for the first page
const ctrlSecond = require('../controllers/ctrlSecond'); //for the second page

/* GET home page. */
router.get('/', ctrlMain.index); //getting homepage
router.get('/trails', ctrlFirst.dataset1);
router.get('/species', ctrlSecond.dataset2);

router
    .route('/trails/add')
    .get(ctrlFirst.showForm)
    .post(ctrlFirst.addData);

router
    .route('/species/add')
    .get(ctrlSecond.showForm)
    .post(ctrlSecond.addData);

module.exports = router;