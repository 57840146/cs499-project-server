const express = require('express')
const router = express.Router()

const {
  addOrder,
  getAllBuyOrderFromEmail,
} = require('../controllers/orderHistoryController')

router.post('/addOrder', addOrder)
router.get('/getAllBuyOrderFromEmail', getAllBuyOrderFromEmail)
module.exports = router
