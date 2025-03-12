const GameProgress = require('../models/GameProgress');
const mongoose = require('mongoose');

/**
 * Get progress for all games for a specific user
 * @param {string} userId - The user ID
 * @returns {Promise<Array>} - Array of progress entries
 */
const getUserProgress = async (userId) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      throw new Error('Invalid user ID');
    }

    console.log(`Fetching game progress for user: ${userId}`);
    const progress = await GameProgress.find({ user: userId })
      .populate('game', 'title')
      .lean();

    console.log(`Found ${progress.length} progress entries for user ${userId}`);
    return progress.map(item => ({
      gameId: item.game._id.toString(),
      completed: item.completed,
      score: item.score,
      lastPlayed: item.lastPlayed
    }));
  } catch (error) {
    console.error('Error getting user progress:', error);
    throw error;
  }
};

/**
 * Update or create progress for a game for a specific user
 * @param {string} userId - The user ID
 * @param {string} gameId - The game ID
 * @param {Object} progressData - The progress data to update
 * @returns {Promise<Object>} - Updated progress entry
 */
const updateProgress = async (userId, gameId, progressData) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(gameId)) {
      throw new Error('Invalid user ID or game ID');
    }

    console.log(`Updating progress for user ${userId} and game ${gameId}`);
    const progress = await GameProgress.findOneAndUpdate(
      { user: userId, game: gameId },
      {
        ...progressData,
        lastPlayed: Date.now()
      },
      { new: true, upsert: true }
    );

    console.log(`Progress updated successfully for user ${userId} and game ${gameId}`);
    return progress;
  } catch (error) {
    console.error('Error updating progress:', error);
    throw error;
  }
};

module.exports = {
  getUserProgress,
  updateProgress
};