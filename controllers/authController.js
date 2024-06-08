const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user already exists
    const userExists = await User.findOne({ where: { username } });
    if (userExists) return res.status(400).send('User already exists');

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const user = await User.create({ username, password: hashedPassword });
    res.send(user);
  } catch (err) {
    res.status(500).send(err.message);
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
//     Purpose of the JWT Token
// JWT tokens are commonly used for secure transmission of information between parties. In this context, the JWT token serves several purposes:
// Authentication: Once the user is authenticated (e.g., after logging in), the server generates a JWT and sends it to the client. The client then includes this token in subsequent requests to access protected resources.
// Stateless Sessions: JWT allows for stateless authentication. Instead of storing session data on the server, the token contains all the necessary information (e.g., user ID) and can be verified using the secret key.
// Security: JWT tokens are signed to prevent tampering. If someone tries to alter the token, the signature verification will fail, and the token will be rejected. Overall, JWT provides a secure and scalable way to handle user authentication in web applications.
    req.session.token = token;
    res.header('Authorization', token).send(token);
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
