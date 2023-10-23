const mongoose = require('mongoose')

const userAccountSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please add first name'],
    },
    lastName: {
      type: String,
      required: [true, 'Please add last name'],
    },
    address: {
      type: String,
      required: [true, 'Please add an address'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    phoneNumber: {
      type: String,
      required: [true, 'Please add a phone number'],
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('UserAccount', userAccountSchema)
