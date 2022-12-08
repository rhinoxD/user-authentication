const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

const User = require('../models/user');

const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler('Login first to access this resource.', 401));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id);
  next();
});

const currentuser = router.get(
  '/api/users/currentuser',
  isAuthenticatedUser,
  catchAsyncErrors(async (req, res) => {
    const user = await User.findById(req.user.id);
    res.status(200).json({
      success: true,
      user,
    });
  })
);

module.exports = currentuser;
