const ensureAdmin = (req, res, next) => {
    if (req.session && req.session.user && req.session.user.role === 'admin') {
      next();
    } else {
      res.status(403).json({ message: 'Access denied, admin only.' });
    }
  };
  
  module.exports = ensureAdmin;