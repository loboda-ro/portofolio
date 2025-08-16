const express = require('express');
const router = express.Router();
const { verifyCredentials } = require('../controllers/authController')

// Route to verify credentials
router.post('/verify', (req, res) => {

    console.log(req.body)

    const { email, password } = req.body;



    if (!email || !password) {
        return res.status(400).json({ message: 'Email/Login and password are required' });
    }

    const isValid = verifyCredentials(email, password);

        if (isValid) {
      // Generate a simple token (in production, use JWT)
      const token = Buffer.from(`${email}:${Date.now()}`).toString('base64');
      res.json({ 
          success: true, 
          message: 'Login successful',
          token: token,
          user: { email: email }
      });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

module.exports = router;