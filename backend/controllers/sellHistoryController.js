const mongoose = require('mongoose')
const { Schema } = mongoose
const Items = require('../models/ItemsModel')
const UserAccount = require('../models/userAccountModel')
const asyncHandler = require('express-async-handler')
const SellHistory = require('../models/sellHistory')

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
//Remove filter
function removewithfilter(arr) {
  let outputArray = arr.filter(function (v, i, self) {
    // It returns the index of the first
    // instance of each value
    return i == self.indexOf(v)
  })

  return outputArray
}

// @desc    AddSellOrder
// @route   Post /api/sellHistory/addSellOrder
// @access  Public
const addSellOrder = asyncHandler(async (req, res) => {
  const { orderitemsid, orderitemsamt, address } = req.body

  var orderItems = orderitemsid.split(',')
  var allSeller = []
  var orderSellerEmail = []
  var orderItemsAmt = orderitemsamt.split(',')
  var orderItemsArray = []
  var userAccount
  var ordertotal = 0
  var filter
  //identitfy all the unique seller
  for (let i = 0; i < orderItems.length; i++) {
    var itemRef = await Items.findOne({ id: orderItems[i] })
    userAccount = await UserAccount.findById(itemRef.seller)
    orderSellerEmail.push(userAccount.email)
  }
  allSeller = removewithfilter(orderSellerEmail)
  for (let i = 0; i < allSeller.length; i++) {
    // all unique seller email
    for (let j = 0; j < orderItems.length; j++) {
      // all seller email in order
      var itemRef = await Items.findOne({ id: orderItems[j] })

      if (orderSellerEmail[j] == allSeller[i]) {
        orderItemsArray.push({
          itemid: itemRef.id,
          amount: orderItemsAmt[j],
          price: itemRef.price,
          title: itemRef.title,
        })
        ordertotal =
          ordertotal + parseFloat(itemRef.price) * parseFloat(orderItemsAmt[j])
      }
    }

    filter = { email: allSeller[i] } // update filter
    userAccount = await UserAccount.findOne({ email: allSeller[i] }) // find the seller email

    await UserAccount.findOneAndUpdate(filter, {
      $inc: { balance: ordertotal.toString() },
    })

    // create item
    await SellHistory.create({
      seller: userAccount,
      ordertotal: ordertotal,
      orderdate: getTodayDate(),
      sellItems: orderItemsArray,
      address: address,
    })
    ordertotal = 0
    orderItemsArray = []
  }

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
