const express = require('express');
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Body Parser
app.use(express.json());

// Routes
app.use('/api', routes);

// 404 Handler (Express v5 compatible)
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found!`,
  });
});

// Global Error Handler
app.use(errorHandler);

module.exports = app;