const express = require('express')
const asyncHandler = require('express-async-handler')
const router = express.Router()
const cart = require('../models/cartModel')
const userAccount = require('../models/userAccountModel')


const addToCart  = asyncHandler(async(req, res) => {
  const prevCart = await cart.findOne({ "id": req.userAccount.id });
  prevCart.items.push(req.body.item);

  cart.replaceOne({"id":req.userAccount.id}, prevCart.items)

})

const removeFromCart  = asyncHandler(async(req, res) => {
  const prevCart = await cart.findOne({ "id": req.userAccount.id });

  const index = array.indexOf(req.body.item);
  if (index !== -1) {
    prevCart.items.splice(index, 1);
  }
  
  cart.replaceOne({"id":req.userAccount.id}, prevCart.items)
})

const checkoutCart  = asyncHandler(async(req, res) => {
  const prevCart = await cart.findOne({ "id": req.userAccount.id });
  prevCart.items.push(req.body.order);

  cart.replaceOne({"id":req.userAccount.id}, prevCart.items)
})

module.exports = {
  addToCart,
  removeFromCart,
  checkoutCart
}