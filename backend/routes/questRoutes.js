const express = require('express')
const { createQuest, getAllQuests, getQuest, deleteQuest, updateQuest } = require('../controllers/questController')

const router = express.Router()

// GET all Quests
router.get('/', getAllQuests)

// GET a single Quest
router.get('/:id', getQuest)

// POST a new Quest
router.post('/', createQuest)
// UPDATE a Quest
router.patch('/:id', updateQuest)

// DELETE a Quest
router.delete('/:id', deleteQuest)

module.exports = router
