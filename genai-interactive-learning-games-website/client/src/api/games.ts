import api from './api';

// Description: Get list of available learning games
// Endpoint: GET /api/games
// Response: { games: Array<{ _id: string, title: string, description: string, category: string, difficulty: string, imageUrl: string }> }
export const getGames = async () => {
  try {
    const response = await api.get('/api/games');
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }

  // Commenting out mock data
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve({
  //       games: [
  //         {
  //           _id: '1',
  //           title: 'Math Challenge',
  //           description: 'Practice arithmetic with AI-generated problems',
  //           category: 'Mathematics',
  //           difficulty: 'Intermediate',
  //           imageUrl: '/placeholder-game.jpg'
  //         },
  //         // ... other mock games ...
  //       ]
  //     });
  //   }, 500);
  // });
};

// Description: Get game progress for user
// Endpoint: GET /api/games/progress
// Response: { progress: Array<{ gameId: string, completed: number, score: number, lastPlayed: Date }> }
export const getProgress = async () => {
  try {
    const response = await api.get('/api/games/progress');
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }

  // Commenting out mock data
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve({
  //       progress: [
  //         { gameId: '1', completed: 75, score: 850 },
  //         // ... other mock progress ...
  //       ]
  //     });
  //   }, 500);
  // });
};