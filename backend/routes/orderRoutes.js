const protect = require('../middleware/authMiddleware');

const express = require('express');
const router  = express.Router();
const { addOrderItems, getOrderById } = require('../controllers/orderContoller');

router.route('/').post(protect, addOrderItems);
router.route('/:id').get(protect, getOrderById)

module.exports = router;