const asyncHandler = require('express-async-handler')

const Users = require('../models/userModel')

// @desc get user
// @route Get /api/users
// @access Private
const getUser = asyncHandler(async (req,res) =>{
    const user = await Users.find()

    res.status(200).json(user)
})

// @desc Post user
// @route Post /api/users
// @access Private
const setUser = asyncHandler(async (req,res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    
    const user = await Users.create({
        text: req.body.text,
    })

    res.status(200).json(user)
})

// @desc Update user
// @route Update /api/users/:id
// @access Private
const updateUser = asyncHandler(async (req,res) =>{
    const user = await Users.findById(req.params.id)
    
    if(!user){
        res.status(400)
        throw new Error('User not found')
    }

    const updatedUser = await Users.findByIdAndUpdate(req.params.id,req.body,{new:true,})

    res.status(200).json(updatedUser)
})

// @desc delete user
// @route delete /api/users/:id
// @access Private
const deleteUser = asyncHandler(async (req,res) =>{
    const user = await Users.findById(req.params.id)
    
    if(!user){
        res.status(400)
        throw new Error('User not found')
    }
    
    await Users.deleteOne({_id: req.params.id}) // Delete one data by id

    res.status(200).json({id:req.params.id})
})

module.exports ={
    getUser,setUser,updateUser,deleteUser,
}