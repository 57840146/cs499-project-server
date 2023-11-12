const express = require('express')
const router = express.Router()

const {
  addSellOrder,
  getAllSellOrderFromEmail,
} = require('../controllers/sellHistoryController')

router.post('/addSellOrder', addSellOrder)
router.get('/getAllSellOrderFromEmail', getAllSellOrderFromEmail)
module.exports = router
