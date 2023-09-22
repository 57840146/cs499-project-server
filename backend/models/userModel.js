const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
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
