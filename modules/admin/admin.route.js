const express = require('express');
const adminCont = require('./admin.cont');

const router = express.Router();

router.get('/', adminCont.findAdmin);

module.exports = router;
