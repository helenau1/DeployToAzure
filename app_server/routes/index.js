const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/ctrlMain'); //controller for the homepage
const ctrlFirst = require('../controllers/ctrlFirst'); //for the first page
const ctrlSecond = require('../controllers/ctrlSecond'); //for the second page

/* GET home page. */
router.get('/', ctrlMain.index); //getting homepage
router.get('/first', ctrlFirst.dataset1);
router.get('/second', ctrlSecond.dataset2);

module.exports = router;
