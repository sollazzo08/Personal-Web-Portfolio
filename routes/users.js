var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); //for hashing passwords 
const User = require('../models/User');
//const auth = require('../routes/verifyToken');
const {registerValidation,loginValidation} = require('../validation');
require('dotenv').config();
const SECRET = process.env.secret;

/*Note to self, user will be created through a post command using Postman*/


router.post('/register', async function(req, res) {
  //validate data before creating a new user
  const {error} = registerValidation(req.body);
  if(error)
    return res.status(500).send(error.details[0].message);
  //check if user already exits
  const userExist = await User.findOne({email: req.body.email,username: req.body.username});  
  if(userExist)
    return res.status(500).send('User already exists!');
  
  //Hash password
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(req.body.password, salt);  
  //creating new user  
  const user = new User({
      username:  req.body.username,
      email: req.body.email,
      password: hashPassword   
  });
  try {
    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/login', async function(req, res) {
  //validate data before creating a new user
  const {error} = loginValidation(req.body);
  if(error)
    return res.status(500).send(error.details[0].message);
  //check if user already exits
  const userExist = await User.findOne({email: req.body.email});  
  if(!userExist)
    return res.status(500).send('Incorrect email or password');
  //Check if password is correct 
  const correctPass = await bcrypt.compare(req.body.password, userExist.password) 
  if(!correctPass){
    return res.status(500).send('Incorrect email or password');

  }
  //create and assign a token to user with id
  const token = jwt.sign({_id: userExist._id}, SECRET, {expiresIn: '2h'});
  res.header('auth-token', token).send(token);
});


module.exports = router;
