// imports
const express = require('express');
// require('dotenv').config();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const signup = require('./routes/signup');
const signin = require('./routes/signin');
const signout = require('./routes/signout');
const currentuser = require('./routes/current-user');
const errorMiddlware = require('./middlewares/errors');
// constants and variables
const app = express();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(errorMiddlware);

// routes
app.use(signup);
app.use(signin);
app.use(signout);
app.use(currentuser);

// start function
const start = async () => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET must be defined!');
  }
  try {
    const con = await mongoose.connect(process.env.DB_URI);
    console.log(
      `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`
    );
    console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
  } catch (err) {
    console.error(err);
  }

  app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}...`);
  });
};

start();
