const { User } = require('../models');
const bcrypt = require('bcryptjs');

const seedUsers = async () => {
  const hashedPassword1 = await bcrypt.hash('password1', 10);
  const hashedPassword2 = await bcrypt.hash('password2', 10);

  await User.bulkCreate([
    {
      id: 1, // Manually set ID for testing
      username: 'player1',
      email: 'player1@example.com',
      password: hashedPassword1,
      role: 'user',
    },
    {
      id: 2, // Manually set ID for testing
      username: 'player2',
      email: 'player2@example.com',
      password: hashedPassword2,
      role: 'user',
    },
    // added for testing
    {
      id: 3,
      username: 'admin',
      email: 'admin@example.com',
      password: hashedPassword3,
      role: 'admin',
    },
  ],
    {
      ignoreDuplicates: true // In case the users already exist, ignore the duplicate entries
    });
};

module.exports = seedUsers;
