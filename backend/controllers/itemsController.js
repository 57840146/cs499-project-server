const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Items = require('../models/ItemsModel')
const UserAccount = require('../models/userAccountModel')
// @desc    AddItem
// @route   Post /api/items/add
// @access  Public
const addItem = asyncHandler(async (req, res) => {
  const { id, title, price, img, selleremail } = req.body

  if (!id || !title || !price || !img || !selleremail) {
    res.status(400)
    throw new Error('Please add all fields')
  }
  // Find UserAccount associated
  const userExist = await UserAccount.findOne({ email: selleremail })
  if (!userExist) {
    res.status(400)
    throw new Error('User Not Found')
  }
  //Create Item
  const item = await Items.create({
    id,
    title,
    price,
    img,
    seller: userExist,
  })

  if (item) {
    res.status(201).json({
      id: item.id,
      title: item.title,
      price: item.price,
      img: item.img,
      seller: item.seller,
    })
  } else {
    res.status(400)
    throw new Error('Invalid Item Data')
  }
  res.json({ message: 'Generate Item Data' })
})

// @desc    GetItem
// @route   Get /api/items
// @access  Public
const getItems = asyncHandler(async (req, res) => {
  const items = await Items.find().populate('seller', 'email')

  res.status(200).json(items)
})

module.exports = {
  getItems,
  addItem,
}
