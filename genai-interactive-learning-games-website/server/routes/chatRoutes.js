const express = require('express');
const router = express.Router();
const { requireUser } = require('../middleware/auth');
const { sendLLMRequest } = require('../services/llmService');

// POST /api/chat/message - Send message to AI tutor
router.post('/message', requireUser, async (req, res) => {
  try {
    console.log('Processing chat message request');
    const { message } = req.body;

    if (!message || typeof message !== 'string') {
      console.log('Invalid message format received');
      return res.status(400).json({
        success: false,
        error: 'Message is required and must be a string'
      });
    }

    console.log(`Received message from user: ${req.user.id}`);

    // Construct prompt for educational context
    const prompt = `You are an AI tutor helping a student learn. The student asks: "${message}".
    Provide a helpful, educational response that explains concepts clearly and encourages learning.`;

    // Use the LLM service to generate a response
    // Default to OpenAI since it's widely used, but could be configurable
    console.log('Sending request to LLM service');
    const response = await sendLLMRequest('openai', 'gpt-3.5-turbo', prompt);
    console.log('Received response from LLM service');

    return res.status(200).json({
      success: true,
      response
    });
  } catch (error) {
    console.error('Error in chat message endpoint:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to process message'
    });
  }
});

module.exports = router;