const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const authController = require('./controllers/authController');
const taskController = require('./controllers/taskController');
const noteController = require('./controllers/noteController');
const { authenticateToken } = require('./services/authService');

const app = express();
app.use(express.json());

// Swagger docs
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Public route
app.post('/login', authController.login);

// Protected routes
app.get('/tasks', authenticateToken, taskController.getTasks);
app.post('/notes', authenticateToken, noteController.createNote);
app.get('/notes', authenticateToken, noteController.getNotes);

module.exports = app;
