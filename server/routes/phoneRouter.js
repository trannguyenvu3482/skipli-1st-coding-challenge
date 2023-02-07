const express = require('express');

const router = express.Router();

const phoneController = require('../controllers/phoneController');

router.route('/create-code').post(phoneController.CreateNewAccessCode);

module.exports = router;
