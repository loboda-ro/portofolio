const express = require('express');
const router = express.Router();
const { verifyCredentials } = require('../controllers/authController')


router.post('/verify', verifyCredentials())