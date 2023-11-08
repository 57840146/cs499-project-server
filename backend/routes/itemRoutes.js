const express = require('express')
const router = express.Router()
const { getItems, addItem } = require('../controllers/itemsController')

const { protect } = require('../middleware/authMiddleware')

router.get('/', getItems)
router.post('/add', addItem)

module.exports = router
