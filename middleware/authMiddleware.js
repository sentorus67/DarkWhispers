// Middleware for checking authentication (replace with your implementation)
const ensureUser = (req, res, next) => {
    // Check if user is authenticated (e.g., using session or JWT)
    // If not authenticated, return an error response
    if (req.session && req.session.user && req.session.user.role === 'user') {
      return res.status(401).json({ error: 'Not signed in' });
    }
    // If authenticated, proceed to the next route handler
    next();
  };

  module.exports = ensureUser;