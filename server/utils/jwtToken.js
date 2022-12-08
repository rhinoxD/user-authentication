require('dotenv').config();

// create and send token and save in the cookie
const sendToken = (user, statusCode, res) => {
  // create jwt token
  const token = user.getJwtToken();
  // options for cookie
  const options = {
    expires: Date.now() + process.env.COOKIE_EXPIRE_TIME * 24 * 60 * 60 * 1000,
    httpOnly: true,
  };
  res.status(statusCode).cookie('token', token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
