const express = require('express')
const User = require('../models/userModel')

const router = express.Router()

// GET all users
router.get('/', (req, res) => {
  res.json({ msg: 'GET all users' })
})

// GET a single user
router.get('/:id', (req, res) => {
  res.json({ msg: 'GET a single user' })
})

// POST a new user
router.post('/', async (req, res) => {
  const { id, username, email, passwordHash, userType } = req.body

  try {
    const user = await User.create({
      id,
      username,
      email,
      passwordHash,
      userType,
    })
    res.status(200).json(user)
  } catch (err) {
    res.status(400).json({err: err.message})
  }

  res.json({ msg: 'POST a new user' })
})

// UPDATE a user
router.patch('/:id', (req, res) => {
  res.json({ msg: 'Update a user' })
})

// DELETE a user
router.delete('/:id', (req, res) => {
  res.json({ msg: 'DELETE a user' })
})

module.exports = router
