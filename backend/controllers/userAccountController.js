const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const UserAccount = require('../models/userAccountModel')

// @desc    Register new user Account
// @route   Post /api/userAccount
// @access  Public
const registerUserAccount = asyncHandler(async (req, res) => {
  const { name, email, password, phonenumber } = req.body

  if (!name || !email || !password || !phonenumber) {
    res.status(400)
    throw new Error('Please add all fields')
  }
  // Check if user exists
  const userExist = await User.findOne({ email })

  if (userExist) {
    res.status(400)
    throw new Error('User already exists')
  }
  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  //create userAccount
  const userAccount = await UserAccount.create({
    name,
    email,
    password: hashedPassword,
  })

  if (userAccount) {
    res.status(201).json({
      _id: userAccount.id,
      name: userAccount.name,
      email: userAccount.email,
    })
  } else {
  }
  res.json({ message: 'Register User Account' })
})
// @desc    Authenticate a user
// @route   Post /api/userAccount/login
// @access  Public
const loginUserAccount = asyncHandler(async (req, res) => {
  res.json({ message: 'Login User Account' })
})

// @desc    Get User Data
// @route   Get /api/userAccount/me
// @access  Public
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: 'User Data Display' })
})

module.exports = {
  registerUserAccount,
  loginUserAccount,
  getMe,
}
