// routes/userRoutes.js
const express = require('express');
const { getUsers } = require('../controllers/userController');

const router = express.Router();

// Define the route and attach the controller function
router.get('/users', getUsers);

module.exports = router;
