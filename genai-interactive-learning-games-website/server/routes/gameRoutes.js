const express = require('express');
const router = express.Router();
const Game = require('../models/Game');
const { requireUser } = require('./middleware/auth');
const gameProgressService = require('../services/gameProgressService');

// Get all games
router.get('/', async (req, res) => {
  try {
    console.log('Fetching all games');
    const games = await Game.find();
    console.log(`Found ${games.length} games`);
    res.json({ games });
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get progress for the authenticated user
router.get('/progress', requireUser, async (req, res) => {
  try {
    const userId = req.user._id;
    console.log(`Fetching game progress for user ${userId}`);
    const progress = await gameProgressService.getUserProgress(userId);
    console.log(`Found progress for ${progress.length} games for user ${userId}`);
    res.json({ progress });
  } catch (error) {
    console.error('Error fetching progress:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;