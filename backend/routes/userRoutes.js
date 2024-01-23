const express = require('express')
const { createUser, getAllUsers, getUser, deleteUser, updateUser } = require('../controllers/userController')

const router = express.Router()

// GET all users
router.get('/', getAllUsers)

// GET a single user
router.get('/:id', getUser)

// POST a new user
router.post('/', createUser)
// UPDATE a user
router.patch('/:id', updateUser)

// DELETE a user
router.delete('/:id', deleteUser)

module.exports = router
