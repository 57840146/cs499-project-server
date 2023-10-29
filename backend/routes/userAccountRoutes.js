const express = require('express')
const router = express.Router()
const {
  registerUserAccount,
  loginUserAccount,
  deleteUserAccount,
  updateUserAccount,
  addOrder,
  getMe,
} = require('../controllers/userAccountController')

const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUserAccount)
router.post('/login', loginUserAccount)
router.delete('/delete', protect, deleteUserAccount)
router.patch('/update', protect, updateUserAccount)
router.post('/addorder', addOrder)
router.get('/me', protect, getMe)

module.exports = router
