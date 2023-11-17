const User = require('../Models/UserSchema');

const getUserProfile = (req, res) => {
  const user = req.session.user;

  if (!user) {
    return res.status(401).json({ error: 'Unauthorized - User not logged in' });
  }

  // Only include necessary fields for the frontend
  const userDataForFrontend = {
    username: user.username,
    email: user.email,
    // Add more fields as needed
  };

  res.status(200).json(userDataForFrontend);
};

module.exports = {
  getUserProfile,
};
