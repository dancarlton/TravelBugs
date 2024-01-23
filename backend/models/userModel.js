const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    profilePicture: String,
    bio: String,
    userType: {
      type: String,
      enum: ['Explorer', 'Creator', 'Provider'],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)
