const ensureAdmin = (req, res, next) => {
    if (req.session && req.session.username && req.session.role === 'admin') {
      next();
    } else {
      res.render('./partials/accessDenied');
    }
  };
  
  module.exports = ensureAdmin