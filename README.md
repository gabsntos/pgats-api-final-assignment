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
   npm install
   ```
2. Start the REST API server:
   ```powershell
   npm start
   ```
3. Start the GraphQL API server:
   ```powershell
   node graphql/server.js
   ```
4. Access GraphQL Playground at [http://localhost:4000/graphql](http://localhost:4000/graphql)
5. Access Swagger docs at [http://localhost:3000/docs](http://localhost:3000/docs)

## Usage
### REST API
**Login**: `POST /login` with `{ "username": "admin", "password": "password" }`
Use the returned token as `Bearer <token>` in the `Authorization` header for protected routes.
**Get Tasks**: `GET /tasks`
**Create Note**: `POST /notes` with `{ "content": "Your note" }`
**Get Notes**: `GET /notes`
**Delete Note**: `DELETE /notes/:id` (replace `:id` with the note's id)

### GraphQL API
**Login Mutation:**
```graphql
mutation {
   login(username: "admin", password: "password") {
      token
      error
   }
}
```
Use the returned token as `Bearer <token>` in the `Authorization` header for all other queries and mutations.

**Get Tasks Query:**
```graphql
query {
   tasks {
      id
      title
   }
}
```

**Get Notes Query:**
```graphql
query {
   notes {
      id
      content
   }
}
```

**Create Note Mutation:**
```graphql
mutation {
   createNote(content: "Your note") {
      id
      content
   }
}
```

**Delete Note Mutation:**
```graphql
mutation {
   deleteNote(id: 1) {
      message
      note {
         id
         content
      }
      error
   }
}
```

## Notes
- No user registration, consultation, or value transfer endpoints.
- For testing, import `app.js` (does not start server).
