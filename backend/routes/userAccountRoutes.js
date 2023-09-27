const express = require('express')
const router = express.Router()
const {
  registerUserAccount,
  loginUserAccount,
  getMe,
} = require('../controllers/userAccountController')

const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUserAccount)
router.post('/login', loginUserAccount)
router.get('/me', protect, getMe)

module.exports = router
