const User = require('../models/userModel')
const mongoose = require('mongoose')

// GET all users
const getAllUsers = async (req, res) => {
  const users = await User.find({}).sort({ createAt: -1 })

  res.status(200).json(users)
}

// GET a single user
const getUser = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such user' })
  }

  const user = await User.findById(id)

  if (!user) {
    return res.status(404).json({ error: 'No such user' })
  }

  res.status(200).json(user)
}

// POST a new user
const createUser = async (req, res) => {
  const { username, email, passwordHash, userType } = req.body

  // add doc to db
  try {
    const user = await User.create({
      username,
      email,
      userType,
    })
    res.status(200).json(user)
  } catch (err) {
    res.status(400).json({ err: err.message })
  }
}

// UPDATE a user
const updateUser = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such user' })
  }

  const user = await User.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!user) {
    return res.status(404).json({ error: 'No such user' })
  }

  res.status(200).json(user)
}

// DELETE a user
const deleteUser = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such user' })
  }

  const user = await User.findOneAndDelete({_id: id})

  if (!user) {
    return res.status(404).json({ error: 'No such user' })
  }

  res.status(200).json(user)
}

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser
}
