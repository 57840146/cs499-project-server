const express = require('express')
const router = express.Router()

const {
  addOrder,
  getAllBuyOrder,
} = require('../controllers/orderHistoryController')

const { protect } = require('../middleware/authMiddleware')

router.post('/addOrder', addOrder)
router.get('/getAllBuyOrder', protect, getAllBuyOrder)
module.exports = router
