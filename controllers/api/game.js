const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {
  res.send('API Example Route');
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    return error;
  }
});

router.post('/', async (req, res) => {
  res.send('API Example POST Route');
  try {
    const user = await User.create(req.body);

    res.json(user);
  } catch (error) {
    return error;
  }

});

module.exports = router;