const protect = require('../middleware/authMiddleware');

const express = require('express');
const router  = express.Router();
const { addOrderItems } = require('../controllers/orderContoller');

router.route('/').post(protect, addOrderItems);

module.exports = router;