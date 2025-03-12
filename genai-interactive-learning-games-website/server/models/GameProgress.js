const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameProgressSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  game: {
    type: Schema.Types.ObjectId,
    ref: 'Game',
    required: true
  },
  completed: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  score: {
    type: Number,
    default: 0,
    min: 0
  },
  lastPlayed: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Create a compound index to ensure a user can only have one progress record per game
gameProgressSchema.index({ user: 1, game: 1 }, { unique: true });

const GameProgress = mongoose.model('GameProgress', gameProgressSchema);

module.exports = GameProgress;