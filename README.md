# Simple Notes & Tasks API

A simple REST API built with Express.js for managing notes and viewing tasks. Includes JWT authentication and Swagger documentation.

## Features
- **Login**: Obtain JWT token
- **Get Tasks**: View static list of tasks (protected)
- **Create Note**: Add a note (protected)
- **Get Notes**: View all notes (protected)
- **Swagger Docs**: Available at `/docs`

## Project Structure
- `controllers/` - Route handlers
- `services/` - Business logic and authentication
- `models/` - Data models
- `app.js` - Express app (for testing)
- `server.js` - Server startup
- `swagger.json` - Swagger API documentation

## Setup
1. Install dependencies:
   ```powershell
   npm install express jsonwebtoken swagger-ui-express
   ```
2. Start the server:
   ```powershell
   node server.js
   ```
3. Access Swagger docs at [http://localhost:3000/docs](http://localhost:3000/docs)

## Usage
- **Login**: `POST /login` with `{ "username": "admin", "password": "password" }`
- Use the returned token as `Bearer <token>` in the `Authorization` header for protected routes.
- **Get Tasks**: `GET /tasks`
- **Create Note**: `POST /notes` with `{ "content": "Your note" }`
- **Get Notes**: `GET /notes`

## Notes
- No user registration, consultation, or value transfer endpoints.
- For testing, import `app.js` (does not start server).
