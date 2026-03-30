const express = require('express');
const router = express.Router();

const { saveRateLimitSettings } = require('../controllers/rateLimit.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/save', authMiddleware, saveRateLimitSettings);

module.exports = router;