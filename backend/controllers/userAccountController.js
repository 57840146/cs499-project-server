const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const UserAccount = require('../models/userAccountModel')

// @desc    Register new user Account
// @route   Post /api/userAccount
// @access  Public
const registerUserAccount = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }
  // Check if user exists
  const userExist = await UserAccount.findOne({ email })

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
      token: generateToken(userAccount._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid User Account Data')
  }
  res.json({ message: 'Register User Account' })
})
// @desc    Authenticate a user
// @route   Post /api/userAccount/login
// @access  Public
const loginUserAccount = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  //check for user email
  const userAccount = await UserAccount.findOne({ email })

  if (userAccount && (await bcrypt.compare(password, userAccount.password))) {
    res.json({
      _id: userAccount.id,
      name: userAccount.name,
      email: userAccount.email,
      token: generateToken(userAccount._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid Credentials')
  }

  res.json({ message: 'Login User Account' })
})

// @desc    Get User Data
// @route   Get /api/userAccount/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = await UserAccount.findById(req.userAccount.id)

  res.status(200).json({
    id: _id,
    name,
    email,
  })
})

//generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}
module.exports = {
  registerUserAccount,
  loginUserAccount,
  getMe,
}
