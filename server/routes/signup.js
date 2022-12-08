const express = require('express');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const router = express.Router();

const User = require('../models/user');
const ErrorHandler = require('../utils/errorHandler');
const sendToken = require('../utils/jwtToken');

const signup = router.post(
  '/api/users/signup',
  catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: 'Please enter the required credentials' });
    }
    const existingUser = await User.find({ email });
    if (existingUser.length !== 0) {
      return res
        .status(400)
        .json({ message: 'An account with this username already exists' });
      // return next(
      //   new ErrorHandler('An account with this username already exists', 400)
      // );
    }
    const user = await User.create({
      name,
      email,
      password,
    });
    sendToken(user, 201, res);
  })
);

module.exports = signup;
