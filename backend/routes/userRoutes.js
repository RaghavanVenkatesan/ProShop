const express = require('express');
const router  = express.Router();
const { authUser, getUserProfile, registerUser, updateUserProfile, getUsers } = require('../controllers/userController');

// this on e causing the error
const  protect  = require('../middleware/authMiddleware');
const admin = require('../middleware/authUserMiddleware');

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)
router.route('/profile')
      .get(protect, getUserProfile)
      .put(protect, updateUserProfile)

module.exports = router;