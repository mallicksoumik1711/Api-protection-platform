const express = require('express');
const router = express.Router();
const { saveJwtSettings } = require('../controllers/jwtSettings.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/save', authMiddleware, saveJwtSettings); //creates and updates JWT settings for a project

module.exports = router;