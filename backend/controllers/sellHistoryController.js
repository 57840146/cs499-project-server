const mongoose = require('mongoose')
const { Schema } = mongoose
const Items = require('../models/ItemsModel')
const UserAccount = require('../models/userAccountModel')
const asyncHandler = require('express-async-handler')
const SellHistory = require('../models/orderHistory')

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
// @desc    AddSellOrder
// @route   Post /api/sellHistory/addSellOrder
// @access  Public
const addSellOrder = asyncHandler(async (req, res) => {
  const { email, ordertotal, orderitemsid, orderitemsamt, address } = req.body

  //check for user email
  const filter = { email: email }

  const userAccount = await UserAccount.findOne({ email: email }) // find the seller email
  await UserAccount.findOneAndUpdate(filter, {
    $inc: { balance: ordertotal },
  })

  var orderItems = orderitemsid.split(',')
  var orderItemsAmt = orderitemsamt.split(',')
  var orderItemsArray = []

  for (let i = 0; i < orderItems.length; i++) {
    var itemRef = await Items.findOne({ id: orderItems[i] })

    orderItemsArray.push({
      itemid: itemRef.id,
      amount: orderItemsAmt[i],
      price: itemRef.price,
      title: itemRef.title,
    })
  }
  //Create Item
  const item = await SellHistory.create({
    seller: userAccount,
    ordertotal: ordertotal,
    orderdate: getTodayDate(),
    orderItems: orderItemsArray,
    address: address,
  })

  res.json({ message: 'updated order' })
})

// @desc getAllSellOrderFromEmail
// @route Get /api/sellHistory/getAllSellOrderFromEmail
// @access Public
const getAllSellOrderFromEmail = asyncHandler(async (req, res) => {
  const { email } = req.body

  const userAccount = await UserAccount.findOne({ email: email })

  const sellHistory = await SellHistory.find({ buyer: userAccount }).populate(
    'seller',
  )

  res.status(200).json(sellHistory)
})
// getAllBuyOrderFromEmail,

module.exports = {
  addSellOrder,
  getAllSellOrderFromEmail,
}
