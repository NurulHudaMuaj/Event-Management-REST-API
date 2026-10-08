const express = require('express');
const router = express.Router();
const { register, login, getMe } = require('../controller/authController'); // ফোল্ডার: controller
const { protect } = require('../middleware/auth'); // ফোল্ডার: middleware

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);

module.exports = router;