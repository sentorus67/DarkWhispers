const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('API Example Route');
});

module.exports = router;