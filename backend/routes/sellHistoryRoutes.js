const express = require('express')
const router = express.Router()

const {
  addSellOrder,
  getAllSellOrder,
} = require('../controllers/sellHistoryController')
const { protect } = require('../middleware/authMiddleware')

router.post('/addSellOrder', addSellOrder)
router.get('/getAllSellOrder', protect, getAllSellOrder)
module.exports = router
