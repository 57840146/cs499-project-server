const express = require('express')
const router = express.Router()
const {
  registerUserAccount,
  loginUserAccount,
  deleteUserAccount,
  updateUserAccount,
  getMe,
} = require('../controllers/userAccountController')

const { protect } = require('../middleware/authMiddleware')

router.post('/add', protect, addToCart)
router.post('/remove', protect, removeFromCart)
router.post('/checkout', protect, checkoutCart)

module.exports = router
