const redisClient = require('./signin.js').redisClient;

// next from express - middleware => keeps going down the chain
const requireAuth = (req, res, next) => {
  console.log('hitting the auth', req.headers)
  const { authorization } = req.headers;
  if(!authorization){
    return res.status(401).json('unauthorized');
  }
  return redisClient.get(authorization, (err, reply) => {
    if(err || !reply){
      return res.status(401).json('unauthorized');
    }
    console.log('you shall pass')
    return next();
  })
  return res.status(401).json('unauthorized')
}

module.exports = {
  requireAuth: requireAuth
}
