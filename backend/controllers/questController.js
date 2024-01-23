const Quest = require('../models/questModel');
const mongoose = require('mongoose');

// GET all Quests
const getAllQuests = async (req, res) => {
  const quests = await Quest.find({}).sort({ createdAt: -1 }); // Changed createAt to createdAt
  res.status(200).json(quests);
};

// GET a single Quest
const getQuest = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such Quest' });
  }

  const quest = await Quest.findById(id);

  if (!quest) {
    return res.status(404).json({ error: 'No such Quest' });
  }

  res.status(200).json(quest);
};

// POST a new Quest
const createQuest = async (req, res) => {
  const { questName, description, difficultyLevel, profilePicture, bio, questType, questTags, questCreator, questRating, questReviews, questReviewAmount, questItinerary } = req.body;

  try {
    const newQuest = await Quest.create({
      questName,
      description,
      difficultyLevel,
      profilePicture,
      bio,
      questType,
      questTags,
      questCreator,
      questRating,
      questReviews,
      questReviewAmount,
      questItinerary
    });
    res.status(200).json(newQuest);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

// UPDATE a Quest
const updateQuest = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such Quest' });
  }

  const updatedQuest = await Quest.findOneAndUpdate(
    { _id: id },
    { ...req.body },
    { new: true }  // Option to return the updated document
  );

  if (!updatedQuest) {
    return res.status(404).json({ error: 'No such Quest' });
  }

  res.status(200).json(updatedQuest);
};

// DELETE a Quest
const deleteQuest = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such Quest' });
  }

  const quest = await Quest.findOneAndDelete({ _id: id });

  if (!quest) {
    return res.status(404).json({ error: 'No such Quest' });
  }

  res.status(200).json(quest);
};

module.exports = {
  createQuest,
  getAllQuests,
  getQuest,
  deleteQuest,
  updateQuest
};
