const mongoose = require('mongoose')
const { Schema } = mongoose
const Items = require('../models/ItemsModel')
const UserAccount = require('../models/userAccountModel')
const asyncHandler = require('express-async-handler')
const OrderHistory = require('../models/orderHistory')

//get today's date
function getTodayDate() {
  var today = new Date()
  var dd = today.getDate()

  var mm = today.getMonth() + 1
  var yyyy = today.getFullYear()
  if (dd < 10) {
    dd = '0' + dd
  }

  if (mm < 10) {
    mm = '0' + mm
  }
  return mm + '/' + dd + '/' + yyyy
}
// @desc    AddOrder
// @route   Post /api/orderHistory/addOrder
// @access  Public
const addOrder = asyncHandler(async (req, res) => {
  const { email, orderitemsid, orderitemsamt } = req.body

  //check for user email
  const filter = { email: email }
  const userAccount = await UserAccount.findOne({ email: email })
  var orderItems = orderitemsid.split(',')
  var orderItemsAmt = orderitemsamt.split(',')
  var orderItemsArray = []
  var ordertotal = 0

  for (let i = 0; i < orderItems.length; i++) {
    var itemRef = await Items.findOne({ id: orderItems[i] })

    orderItemsArray.push({
      itemid: itemRef.id,
      amount: orderItemsAmt[i],
      price: itemRef.price,
      title: itemRef.title,
    })
    ordertotal =
      ordertotal + parseFloat(itemRef.price) * parseFloat(orderItemsAmt[i])
  }
  //Create Item
  const item = await OrderHistory.create({
    buyer: userAccount,
    ordertotal: ordertotal,
    orderdate: getTodayDate(),
    orderItems: orderItemsArray,
  })

  await UserAccount.findOneAndUpdate(filter, {
    $inc: { balance: -ordertotal.toString() },
  })

  res.json({ message: 'updated order' })
})

// @desc getAllBuyOrder
// @route Get /api/orderHistory/getAllBuyOrder
// @access Public
const getAllBuyOrder = asyncHandler(async (req, res) => {
  const userAccount = await UserAccount.findById(req.userAccount.id)

  const buyHistory = await OrderHistory.find({ buyer: userAccount }).populate(
    'buyer',
  )

  res.status(200).json(buyHistory)
})
// getAllBuyOrderFromEmail,

module.exports = {
  addOrder,
  getAllBuyOrder,
}
