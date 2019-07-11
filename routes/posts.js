const router = require('express').Router();
const verify = require('./verifyToken')


router.get('/', verify, (req,res) => {
  res.json(req.user)
  // this will pull info based on individual user. note: not using this yet
  User.findbyOne({_id: req.user})
})

module.exports = router