const mongoose = require('mongoose')

const itemsSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: [true, 'Please add id'],
    },
    title: {
      type: String,
      required: [true, 'Please add title'],
    },
    price: {
      type: String,
      required: [true, 'Please add price'],
    },
    img: {
      type: String,
      required: [true, 'Please add img url'],
    },
    selleremail: {
      type: String,
      required: [true, 'Please add Seller email'],
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('Items', itemsSchema)
