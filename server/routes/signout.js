const express = require('express');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const router = express.Router();

const signout = router.post(
  '/api/users/signout',
  catchAsyncErrors((req, res) => {
    res.cookie('token', null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
    res.status(200).json({
      success: true,
      message: 'Logged Out',
    });
  })
);

module.exports = signout;
