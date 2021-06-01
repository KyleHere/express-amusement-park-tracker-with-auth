const { Router } = require('express');

const db = require('../db/models');
const {csrfProtection, asyncHandler} =  require('./utils')

const userRouter = Router();

userRouter.get('/register', csrfProtection, (req, res, next) => {
  const user = db.User.build();
  res.render('user-register', {
    user,
    title: 'Register',
    csrfToken: req.csrfToken(),
  });
});

module.exports = userRouter;
