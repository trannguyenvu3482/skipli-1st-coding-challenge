const express = require('express');

const router = express.Router();

const phoneController = require('../controllers/phoneController');

router.route('/create-code').post(phoneController.CreateNewAccessCode);

router.route('/validate-code').post(phoneController.ValidateAccessCode);
module.exports = router;
