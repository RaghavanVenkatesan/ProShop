const protect = require('../middleware/authMiddleware');

const express = require('express');
const router  = express.Router();
const { addOrderItems, getOrderById, updateOrderToPaid } = require('../controllers/orderContoller');

router.route('/').post(protect, addOrderItems);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);

module.exports = router;