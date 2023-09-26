const express = require('express')
const router = express.Router()
const {
  registerUserAccount,
  loginUserAccount,
  getMe,
} = require('../controllers/userAccountController')

router.post('/', registerUserAccount)
router.post('/login', loginUserAccount)
router.get('/me', getMe)

module.exports = router
