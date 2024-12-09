const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { Client } = require('../models');  // Your Client model (the User model)
const { JWT_SECRET } = process.env;  // Store secret key in environment variables

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),  // Extract JWT from Authorization header
  secretOrKey: JWT_SECRET,  // Secret for JWT verification
};

// Define the JWT strategy
passport.use(
  new JwtStrategy(options, async (jwt_payload, done) => {
    try {
      const user = await Client.findByPk(jwt_payload.id);  // Find user by the ID in the JWT payload
      if (!user) {
        return done(null, false, { message: 'User not found' });  // No user found
      }
      return done(null, user);  // User found, return the user object
    } catch (err) {
      return done(err, false);  // Return error if any
    }
  })
);