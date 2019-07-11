const jwt = require('jsonwebtoken')


// check if user has token when logging in
module.exports = function (req, res, next){
  const token = req.header('auth-token')
  if(!token) return res.status(401).send('Access Denied')

// if there is a token, we verify it here
  try{
    const verified = jwt.verify(token, process.env.TOKEN_SECRET)
    req.user= verified
    next()
  }catch(err){
    res.status(400).send('Invalid Token')
  }
}