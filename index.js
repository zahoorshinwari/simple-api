// index.js
const express = require('express');
const { connectToDb } = require('./models/db');
const userRoutes = require('./routes/userRoutes');
const app = express();
const port = 3000;

// Connect to the database before handling requests
connectToDb().then(() => {
  app.use('/api', userRoutes);

  // Default route
  app.get('*', (req, res) => {
    res.status(404).json({ error: 'Not Found' });
  });

  app.listen(port, () => {
    console.log(`API is running on http://localhost:${port}`);
  });
});

module.exports = app;
