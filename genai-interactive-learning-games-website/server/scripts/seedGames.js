require('dotenv').config();
const mongoose = require('mongoose');
const { connectDB } = require('../config/database');
const Game = require('../models/Game');

const sampleGames = [
  {
    title: 'Math Challenge',
    description: 'Practice arithmetic with AI-generated problems',
    category: 'Mathematics',
    difficulty: 'Intermediate',
    imageUrl: '/default-game.jpg'
  },
  {
    title: 'Language Master',
    description: 'Learn new languages with AI conversation',
    category: 'Languages',
    difficulty: 'Beginner',
    imageUrl: '/default-game.jpg'
  },
  {
    title: 'Science Quiz',
    description: 'Test your science knowledge',
    category: 'Science',
    difficulty: 'Advanced',
    imageUrl: '/default-game.jpg'
  },
  {
    title: 'AI Story Teller',
    description: 'Create and explore interactive AI-generated stories',
    category: 'Creative',
    difficulty: 'Beginner',
    imageUrl: '/default-game.jpg'
  },
  {
    title: 'Coding Challenges',
    description: 'Learn programming with interactive coding exercises',
    category: 'Programming',
    difficulty: 'Intermediate',
    imageUrl: '/default-game.jpg'
  },
  {
    title: 'Knowledge Escape Room',
    description: 'Solve puzzles and riddles to escape virtual rooms',
    category: 'General Knowledge',
    difficulty: 'Advanced',
    imageUrl: '/default-game.jpg'
  }
];

const seedGames = async () => {
  try {
    await connectDB();

    // Clear existing games
    await Game.deleteMany({});
    console.log('Deleted existing games');

    // Insert sample games
    const createdGames = await Game.insertMany(sampleGames);
    console.log(`Added ${createdGames.length} sample games`);

    // Close the connection
    mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding games:', error);
    process.exit(1);
  }
};

seedGames();