const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    userAccount: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'UserAccount',
    },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('User', userSchema)
