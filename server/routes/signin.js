const express = require('express');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const router = express.Router();

const User = require('../models/user');
const sendToken = require('../utils/jwtToken');

const signin = router.post(
  '/api/users/signin',
  catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    // Check if email and password is entered by user
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Please enter email and password' });
      // return next(new ErrorHandler('Please enter email and password', 400));
    }
    // Finding user in database
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
      // return next(new ErrorHandler('Invalid Email or Password', 401));
    }
    // Check if password is correct or not
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
      return res.status(400).json({ message: 'Invalid email or password' });
      // return next(new ErrorHandler('Invalid Email or Password', 401));
    }
    sendToken(user, 200, res);
  })
);

module.exports = signin;
