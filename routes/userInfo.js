var express = require('express');
var router = express.Router();
//const {auth} = require('./verifyToken');
//Import the Image schema 
const UserInfo = require('../models/UserInfo');                  


//Retrieves the most recent image from the database
router.get('/', (req, res) => {
  UserInfo.find().sort({"date": -1}).limit(1)
  .then(info => res.json(info))
});

//User info is stored 
router.post('/', function(req, res) {
  const newUserInfo = new UserInfo({
    name: req.body.name,
    bio: req.body.bio
  });
  newUserInfo.save().then(info => res.json(info));
});

module.exports = router;