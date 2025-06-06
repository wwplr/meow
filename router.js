const express = require('express');
const router = express.Router();


router.use('/admin', require('./modules/admin/admin.route'));

module.exports = router;