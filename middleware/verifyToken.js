
const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  // Get the token from cookies
  const token = req.cookies.token || req.headers['authorization']?.split(' ')[1]; // Check cookie or Authorization header
  // If no token is found, send an error
  if (!token) {
    return res.redirect('/Auth/login');
  }

  try {
    // Verify the token and decode it
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // Attach the decoded user data (including the role) to the req object
    next(); // Continue to the next middleware or route handler
  } catch (error) {
    return res.status(400).json({ message: 'Invalid token.' });
  }
}

module.exports = verifyToken;