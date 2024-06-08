// const express = require('express');
// const router = express.Router();
// const authController = require('./authController'); // Correct path to authController


// // Define your auth routes here
// router.post('/register', authController.register);
// router.post('/login', authController.login);
// router.post('/logout', authController.logout);

// module.exports = router;
const router = require('express').Router();
const { User } = require('../models');
const bcrypt = require('bcryptjs');

// POST route to handle user sign-up
router.post('/register', async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Log received data
    console.log('Received data:', { username, password, email });

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed password:', hashedPassword);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;

      console.log('User created and session saved:', newUser);
      res.status(200).json(newUser);
    });
  } catch (err) {
    // Log the error
    console.error('Error during sign-up:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
