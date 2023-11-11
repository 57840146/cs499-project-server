const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const UserAccount = require('../models/userAccountModel')

// @desc    Register new user Account
// @route   Post /api/userAccount
// @access  Public
const registerUserAccount = asyncHandler(async (req, res) => {
  const {
    firstname,
    lastname,
    address,
    email,
    password,
    phonenumber,
  } = req.body

  if (
    !firstname ||
    !lastname ||
    !address ||
    !email ||
    !password ||
    !phonenumber
  ) {
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
    firstname,
    lastname,
    address,
    email,
    password: hashedPassword,
    phonenumber,
  })

  if (userAccount) {
    res.status(201).json({
      _id: userAccount.id,
      firstname: userAccount.firstname,
      lastname: userAccount.lastname,
      address: userAccount.address,
      balance: userAccount.balance,
      email: userAccount.email,
      phonenumber: userAccount.phonenumber,
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
      firstname: userAccount.firstname,
      lastname: userAccount.lastname,
      address: userAccount.address,
      balance: userAccount.balance,
      email: userAccount.email,
      phonenumber: userAccount.phonenumber,
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
  const {
    _id,
    firstname,
    lastname,
    address,
    balance,
    email,
    phonenumber,
  } = await UserAccount.findById(req.userAccount.id)

  res.status(200).json({
    id: _id,
    firstname,
    lastname,
    address,
    balance: balance.toString(),
    email,
    phonenumber,
  })
})

// @desc    Delete user
// @route   DELETE /api/userAccount/deleteUserAccount
// @access  Private
const deleteUserAccount = asyncHandler(async (req, res) => {
  const queryResponse = await UserAccount.deleteOne({ id: req.userAccount.id })

  res.status(202).json(queryResponse)
})

// @desc    Update user information
// @route   PATCH /api/userAccount/updateUserAccount
// @access  Private
const updateUserAccount = asyncHandler(async (req, res) => {
  let queryResponse = await UserAccount.updateOne(
    { id: req.userAccount.id },
    req.body,
  )

  res.status(200).json(queryResponse)
})

//generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}
module.exports = {
  registerUserAccount,
  loginUserAccount,
  deleteUserAccount,
  updateUserAccount,
  getMe,
}
