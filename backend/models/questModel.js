const mongoose = require('mongoose');

const questSchema = new mongoose.Schema({
  questName: {
    type: String,
    required: true,
  },
  description: String,
  difficultyLevel: {
    type: String,
    required: true,
  },
  profilePicture: String,
  bio: String,
  questType: {
    type: String,
    required: true,
  },
  questTags: [String],
  questCreator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  questRating: {
    type: Number,
    required: true,
  },
  questReviews: [{
    reviewer: String,
    comment: String,
    rating: Number,
  }],
  questReviewAmount: Number,
  questItinerary: [{
    reviewer: String,
    comment: String,
    rating: Number,
  }],


}, { timestamps: true });

module.exports = mongoose.model('Quest', questSchema);
