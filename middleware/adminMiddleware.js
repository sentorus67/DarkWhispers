const ensureAdmin = (req, res, next) => {
    // Check if a valid session exists
    
    if (!req.session || !req.session.users) {
      return res.status(401).json({ message: 'Unauthorized access: Please log in.' });
    }
  
    // Check for admin role
    if (req.session.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied, admin only.' });
    }
    next();
  };
  
  module.exports = ensureAdmin