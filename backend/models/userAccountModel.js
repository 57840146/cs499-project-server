const mongoose = require('mongoose')

const userAccountSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, 'Please add first name'],
    },
    lastname: {
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
    phonenumber: {
      type: String,
      required: [true, 'Please add a phone number'],
    },
    balance: {
      type: mongoose.Decimal128,
      default: 999999,
    },
    orderhistory: [
      {
        ordertotal: {
          type: mongoose.Decimal128,
        },
        orderitemsid: [Number],
        orderitemsamt: [Number],
        orderdate: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('UserAccount', userAccountSchema)
