# GenAI Interactive Learning Games Website

GenAI Interactive Learning Games Website is an interactive learning platform that leverages generative AI to provide engaging educational games. The application aims to enhance learning experiences by combining traditional educational content with innovative game-based learning strategies.

## Overview

The architecture of the GenAI Interactive Learning Games Website is split into two main parts:

1. **Frontend**: A ReactJS-based client application located in the `client/` directory, which uses the Vite build tool for fast development. This part handles user interface interactions, including pages for login, registration, and dashboards for games and user progress.

2. **Backend**: An Express-based server located in the `server/` directory, implementing REST API endpoints to manage user authentication, game data, and game progress. The backend communicates with a MongoDB database using Mongoose for data persistence.

### Technologies Used

- **Frontend**:
  - ReactJS with Vite
  - Tailwind CSS for styling
  - Shadcn-ui component library
  - React Router for client-side routing

- **Backend**:
  - Node.js with Express
  - MongoDB with Mongoose for database operations
  - JSON Web Tokens (JWT) for authentication and authorization
  - Axios for HTTP requests

### Project Structure

- `client/` — React frontend application
  - `src/` — Main source directory
    - `components/` — Reusable UI components
    - `pages/` — React components representing different pages
    - `api/` — API request handlers
    - `contexts/` — Context providers for state management
    - `hooks/` — Custom React hooks
    - `App.tsx` — Main application component
- `server/` — Express backend application
  - `config/` — Configuration files (e.g., database connection)
  - `models/` — Mongoose models
  - `routes/` — Route handlers
  - `services/` — Service files containing business logic
  - `utils/` — Utility functions
  - `server.js` — Main entry point for the backend server

## Features

- User Authentication: Register, login, and maintain authentication state using JWT.
- Game Dashboard: View all available learning games with detailed descriptions.
- Progress Tracking: Monitor progress in different games, including completion percentage and scores.
- AI Tutor: Interactive chat with AI for educational guidance and support.
- Responsive Design: Optimized for both desktop and mobile views.

## Getting Started

### Requirements

Before setting up this project, ensure you have the following technologies installed:

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB

### Quickstart

1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-repo/GenAI-Interactive-Learning-Games.git
    cd GenAI-Interactive-Learning-Games
    ```

2. **Install frontend dependencies**:
    ```sh
    cd client
    npm install
    cd ..
    ```

3. **Install backend dependencies**:
    ```sh
    cd server
    npm install
    cd ..
    ```

4. **Set up environment variables**:
   Create a `.env` file in the `server/` directory and add the following environment variables:
    ```env
    DATABASE_URL=mongodb://localhost:27017/genai-learning
    JWT_SECRET=your_jwt_secret
    ```

5. **Run the application**:
    ```sh
    npm run start
    ```

   The above command uses Concurrently to run both client and server simultaneously.

6. **Access the application**:
   Visit `http://localhost:5173` in your browser to start using the GenAI Interactive Learning Games Website.

### License

The project is proprietary (not open source). 

© 2024. All rights reserved.