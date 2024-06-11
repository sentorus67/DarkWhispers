const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Create a new admin user
const createAdminUser = async () => {
  try {
    const existingAdmin = await User.findOne({ where: { email: 'admin@example.com' } });

    if (!existingAdmin) {
      const adminUser = await User.create({
        username: 'adminUser',
        password: await bcrypt.hash('adminPassword', 10), // Hash the password
        email: 'admin@example.com',
        role: 'admin',
      });
      console.log('Admin user created:', adminUser);
    } else {
      console.log('Admin user already exists');
    }
  } catch (err) {
    console.error('Error creating admin user:', err);
  }
};

createAdminUser();


exports.register = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Log received data
    console.log('Received data:', { username, password, email });

    // Check if the user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }

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
      res.redirect('/bypass');
      // res.status(200).json(newUser);
    });
  } catch (err) {
    // Log the error
    console.error('Error during sign-up:', err);
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(400).send('User does not exist');

    // Check if the password is correct
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.status(400).send('Invalid password');

    // Create and assign a token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

    req.session.save(() => {
      req.session.token = token;
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;

      
      console.log('Signed in.', user);
      res.redirect('/bypass');
      // res.status(200).json({ message: 'Login successful', redirectUrl: '/game/scenario' });
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.logout = (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).send('Could not log out.');
    } else {
      res.send('Logout successful');
    }
  });
};
