import api from './api';

// Description: Send message to AI tutor
// Endpoint: POST /api/chat/message
// Request: { message: string }
// Response: { success: boolean, response: string }
export const sendMessage = async (message: string) => {
  try {
    const { data } = await api.post('/api/chat/message', { message });
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error?.response?.data?.error || error.message);
  }
};